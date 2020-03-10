<template>
    <v-app>
        <v-app-bar
            app
            color="indigo"
            dark
            dense
        >
            <v-toolbar-title>Stop Watch</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn
                color="light-blue"
                @click="addStopwatch"
            >
                <v-icon left>mdi-plus</v-icon>
                Add Stopwatch
            </v-btn>
        </v-app-bar>
        <v-content>
            <v-container>
                <v-row>
                    <Stopwatch
                        v-for="(s, i) in stopwatches"
                        :key="s.guid"
                        :index="i"
                        :guid="s.guid"
                        @rm="remove(s)"
                        @mark="$event => mark($event)"
                        @reset="reset(s)"
                    />
                </v-row>
                <v-card
                    v-if="marks.length > 0"
                    outlined
                    class="mt-2"
                >
                    <v-simple-table>
                        <template v-slot:default>
                            <thead>
                            <tr>
                                <th>Stopwatch</th>
                                <th>Total Duration</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr
                                v-for="(s, i) in totals"
                                :key="i"
                            >
                                <td><span class="sw-display" :style="{backgroundColor: s.color}">{{ s.watch }}</span>
                                </td>
                                <td>{{ (s.total / 60).toLocaleString() }} minutes</td>
                            </tr>
                            </tbody>
                        </template>
                    </v-simple-table>
                </v-card>
                <v-card
                    v-if="marks.length > 0"
                    outlined
                    class="mt-5"
                >
                    <v-simple-table>
                        <template v-slot:default>
                            <thead>
                            <tr>
                                <th>Stopwatch</th>
                                <th>Start</th>
                                <th>Stop</th>
                                <th>Duration</th>
                                <th>Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr
                                v-for="(s, i) in marks"
                                :key="i"
                            >
                                <td><span class="sw-display" :style="{backgroundColor: s.color}">{{ s.watch }}</span>
                                </td>
                                <td>{{ format(s.start) }}</td>
                                <td>{{ format(s.stop) }}</td>
                                <td>{{ distance(s) }}</td>
                                <td>
                                    <v-icon
                                        @click="em(s)"
                                    >mdi-pencil
                                    </v-icon>
                                    <v-icon
                                        @click="removeMark(i)"
                                    >
                                        mdi-delete
                                    </v-icon>
                                </td>
                            </tr>
                            </tbody>
                        </template>
                    </v-simple-table>
                </v-card>

                <v-dialog v-model="editMark" width="800">
                    <v-card>
                        <v-card-text class="pt-1">
                            <v-form>
                                <v-row>
                                    <v-col cols="12" md="6">
                                        <v-time-picker v-model="editingMark.start" full-width use-seconds class="mt-4"/>
                                    </v-col>
                                    <v-col cols="12" md="6">
                                        <v-time-picker v-model="editingMark.stop" full-width use-seconds class="mt-4"/>
                                    </v-col>
                                </v-row>
                            </v-form>
                        </v-card-text>
                        <v-divider></v-divider>
                        <v-card-actions>
                            <v-btn
                                @click="finalizeMarkEdit"
                                text
                            >
                                Done
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>

    import Stopwatch from "@/components/Stopwatch";
    import {differenceInSeconds, formatDistanceStrict} from "date-fns";

    function uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    export default {
        name: 'App',
        components: {
            Stopwatch
        },
        data() {
            return {
                stopwatches: [],
                marksRaw: [],
                editingMark: {start: null, stop: null},
                editMark: false
            }
        },
        computed: {
            marks() {
                return this.marksRaw;
            },
            totals() {
                let result = {};
                this.marksRaw.forEach(f => {
                    if (!result[f.guid])
                        result[f.guid] = {...f, total: 0};

                    result[f.guid].total = result[f.guid].total + differenceInSeconds(new Date(f.stop), new Date(f.start));
                });

                return Object.keys(result).map(key => result[key]);
            }
        },
        methods: {
            addStopwatch() {
                this.stopwatches.push({guid: uuidv4()});
            },
            remove(s) {
                this.stopwatches = this.stopwatches.filter(f => f.guid !== s.guid);
            },
            mark({start, stop, watch, guid, color}) {
                this.marksRaw.push({mguid: uuidv4(), start, stop, watch, guid, color})
            },
            format(v) {
                return v;
            },
            distance(r) {
                return formatDistanceStrict(r.start, r.stop);
            },
            reset(s) {
                this.marksRaw = this.marksRaw.filter(f => f.guid !== s.guid)
            },
            removeMark(i) {
                this.marksRaw.splice(i, 1);
            },
            em(s) {
                this.editingMark = s;
                this.editMark = true;
            },
            finalizeMarkEdit() {
                this.editMark = false;
            }
        }
    }
</script>

<style lang="scss">
    .sw-display {
        padding: 5px 10px;
        color: white;
        display: block;
    }
</style>
