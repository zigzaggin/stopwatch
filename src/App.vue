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
                >
                    <v-simple-table>
                        <template v-slot:default>
                            <thead>
                            <tr>
                                <th>Stopwatch</th>
                                <th>Start</th>
                                <th>Stop</th>
                                <th>Duration</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr
                                v-for="(s, i) in marks"
                                :key="i"
                            >
                                <td>{{ s.watch }}</td>
                                <td>{{ format(s.start) }}</td>
                                <td>{{ format(s.stop) }}</td>
                                <td>{{ distance(s) }}</td>
                            </tr>
                            </tbody>
                        </template>
                    </v-simple-table>
                </v-card>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>

    import Stopwatch from "@/components/Stopwatch";
    import {format, formatDistanceStrict} from "date-fns";

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
                marksRaw: []
            }
        },
        computed: {
            marks() {
                return this.marksRaw;
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
                this.marksRaw.push({start, stop, watch, guid, color})
            },
            format(v) {
                return format(v, "h:mm:ss a")
            },
            distance(r) {
                return formatDistanceStrict(r.start, r.stop);
            },
            reset(s) {
                this.marksRaw = this.marksRaw.filter(f => f.guid !== s.guid)
            }
        }
    }
</script>

<style lang="scss">
</style>
