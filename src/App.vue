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
                    v-if="marksRaw.length > 0"
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
                                <td>{{ (s.total / 3600).toLocaleString() }} Hours</td>
                            </tr>
                            </tbody>
                        </template>
                    </v-simple-table>
                </v-card>
                <v-card
                    v-if="marksRaw.length > 0"
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
                                v-for="(s, i) in marksRaw"
                                :key="i"
                            >
                                <td><span class="sw-display" :style="{backgroundColor: s.color}">{{ s.watch }}</span>
                                </td>
                                <td>{{ format(s.start) }}</td>
                                <td>{{ format(s.stop) }}</td>
                                <td> {{ distance(s) }} </td>
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
                                        <v-datetime-picker label="Start" v-model="editingMark.start" class="mt-4">
                                            <template slot="dateIcon">
                                                <v-icon>mdi-calendar</v-icon>
                                            </template>
                                            <template slot="timeIcon">
                                                <v-icon>mdi-clock</v-icon>
                                            </template>
                                        </v-datetime-picker>
                                    </v-col>
                                    <v-col cols="12" md="6">
                                        <v-datetime-picker label="Stop" v-model="editingMark.stop" class="mt-4">
                                            <template slot="dateIcon">
                                                <v-icon>mdi-calendar</v-icon>
                                            </template>
                                            <template slot="timeIcon">
                                                <v-icon>mdi-clock</v-icon>
                                            </template>
                                        </v-datetime-picker>
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
    import {format, distanceInWordsStrict, parse, differenceInSeconds} from "date-fns";
    import {loadMarks, loadWatches, persistWatches, saveMarks} from "@/db/db";

    function uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
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
            totals() {
                let result = {};
                this.marksRaw.forEach(f => {
                    if (!result[f.guid])
                        result[f.guid] = {...f, total: 0};

                    result[f.guid].total = result[f.guid].total + differenceInSeconds(parse(f.stop), parse(f.start));
                });

                return Object.keys(result).map(key => result[key]);
            }
        },
        watch: {
            marksRaw() {
                saveMarks(this.marksRaw)
            },
            stopwatches() {
                persistWatches(this.stopwatches)
            }
        },
        created() {
            this.stopwatches = loadWatches();
            this.marksRaw = loadMarks();
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
                return format(parse(v), "M/D h:mm:ss a");
            },
            distance(r) {
                return distanceInWordsStrict(r.start, r.stop);
            },
            reset(s) {
                this.marksRaw = this.marksRaw.filter(f => f.guid !== s.guid)
            },
            removeMark(i) {
                this.marksRaw.splice(i, 1);
            },
            em(s) {
                this.editingMark = s;
                this.editingMark.start = parse(this.editingMark.start);
                this.editingMark.stop = parse(this.editingMark.stop);
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

    .v-time-picker-custom {
      .v-picker__title {
        height: 84px;
        padding-top: 10px;
      }
    }

</style>
