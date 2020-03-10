<template>
    <v-col cols="12" md="3" class="stop-watch">
        <v-dialog v-model="overlay" width="300">

            <v-card>
                <v-card-text class="pt-1">
                    <v-form>
                        <v-text-field
                            v-model="name"
                            placeholder="Stop Watch Name"
                        />
                        <v-color-picker v-model="color" hide-mode-switch hide-inputs/>
                    </v-form>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                    <v-btn
                        @click="overlay = false"
                        text
                    >
                        Done
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn
                        @click="deleteStopwatch"
                        icon
                    >
                        <v-icon>mdi-delete</v-icon>
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-card
            :color="color"
            class="mx-auto"
            outlined
            dark
        >
            <v-list-item one-line>
                <v-list-item-content>
                    <v-list-item-title class="headline mb-1">{{ name ? name : `Stopwatch ${index + 1}` }}
                    </v-list-item-title>
                </v-list-item-content>
                <v-list-item-action>
                    <v-btn
                        @click="overlay = !overlay"
                        icon
                    >
                        <v-icon color="lighten-1">mdi-pencil</v-icon>
                    </v-btn>
                </v-list-item-action>
            </v-list-item>
            <v-divider></v-divider>
            <div class="color-block pa-4">
                <span v-if="running">
                    <v-icon color="lighten-1">mdi-timer</v-icon>
                    Running, started at: {{ formattedStart }}
                </span>
                <span v-else>
                    <v-icon color="lighten-1">mdi-timer-off</v-icon>
                    Not Running
                </span>
            </div>
            <v-divider></v-divider>
            <v-card-actions>
                <v-btn
                    text
                    @click="running = !running"
                >
                    {{ running ? 'Stop' : 'Start' }}
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-col>
</template>

<script>
    let colors = [
        "#b648a9",
        "#6232b6",
        "#70b633",
        "#2b74b6",
        "#b63956",
        "#03b674"
    ];
    import {format} from "date-fns"

    export default {
        name: "Stopwatch",
        props: {
            index: {
                type: Number,
                required: true
            }
        },
        data() {
            return {
                overlay: false,
                name: null,
                color: colors[this.index % colors.length],
                running: false,
                startTime: null,
                stopTime: null
            }
        },
        computed: {
            formattedStart() {
                return format(this.startTime, "h:mm:ss a");
            }
        },
        watch: {
            running(v) {
                if (v) {
                    this.startTime = new Date();
                } else {
                    this.stopTime = new Date();
                }
            },
            stopTime() {
                this.$emit('mark', {start: this.startTime, stop: this.stopTime});
            }
        },
        methods: {
            deleteStopwatch() {
                this.$emit("rm")
            }
        }
    }
</script>

<style lang="scss" scoped>
    .color-block {
        height: 150px;
        font-size: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .actions {
        background: white;
    }
</style>