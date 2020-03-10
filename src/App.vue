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
                        @rm="remove(s)"
                        @mark="$event => mark(s, $event)"
                    />
                </v-row>
                <div
                    v-for="s in stopwatches"
                    :key="s.guid"
                >
                    <div
                        v-for="r in s.marks"
                        :key="r.start"
                    >
                        {{ s.guid }}
                        {{ format(r.start) }}
                        {{ format(r.stop) }}
                        {{ distance(r) }}
                    </div>
                </div>
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
                stopwatches: []
            }
        },
        methods: {
            addStopwatch() {
                this.stopwatches.push({guid: uuidv4(), marks: []});
            },
            remove(s) {
                this.stopwatches = this.stopwatches.filter(f => f.guid !== s.guid);
            },
            mark(s, {start, stop}) {
                s.marks.push({start, stop})
            },
            format(v) {
                return format(v, "h:mm:ss a")
            },
            distance(r) {
                return formatDistanceStrict(r.start, r.stop);
            }
        }
    }
</script>

<style lang="scss">
</style>
