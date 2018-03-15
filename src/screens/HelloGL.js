import React from "react";
import { Animated, StyleSheet, View} from "react-native";
import {Surface} from "gl-react-native";
import { Shaders, Node, GLSL } from "gl-react";

const stateForTime = (t) => ({
    plot : [[0.9, 0.0, 0.1, 0.3, 0.5, 0.5, 0.4, 0.0, 0.8, 0.6, 0.2, 0.6, 0.7, 0.5, 0.5, 0.8, 0.5, 0.6, 0.3, 0.0, 0.7, 0.5, 0.3, 0.3, 0.2, 0.2, 0.3, 0.8, 0.8, 0.8, 0.8, 0.6, 0.0, 0.2, 0.8, 0.0, 0.1, 0.7, 0.9, 0.3, 0.5, 0.3, 0.9, 0.2, 0.8, 0.4, 0.1, 0.2, 0.8, 0.2]],
    time: (Math.floor(t / 100) % 50),
    particles: [(t / 10000) % 1, 0.02]
});

class HelloBlue extends React.Component {
    
    state = stateForTime(0)

    componentDidMount(){
        const begin = Date.now();
        this.interval = setInterval(() => this.setState(
            stateForTime(Date.now() - begin)
        ), 33);
    }

    componentWillUnmount () {
        clearInterval(this.interval);
    }

    render() {
        const { plot, particles } = this.state
        return(
            <Animated.View style={styles.surfaceView}>
            <Surface style={styles.surface}>
            <Node
            uniforms={{
                plot,
                particles,
            }}
            shader={{
                frag: `
                precision highp float;
                varying vec2 uv;
                uniform float particles[3]; 
                uniform int time;
                uniform vec2 plot[1];
                
                float getPos(


                void main () {
                    if (uv.x < particles[0] && uv.x > particles[0] - particles[1] && uv.y < plot[0][0] && uv.y > plot[0][time] - particles[1]) {
                        gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
                    }
                    else if (uv.x > particles[0] && uv.x < particles[0] + particles[1] && uv.y < plot[0][0] && uv.y > plot[0][time] - particles[1]) {
                        gl_FragColor = vec4(0.,0.,0.,0.);
                    }
                }
                `
                vertex:
            }}
            />
            </Surface>
            </Animated.View>
        );

    }
}

const styles = StyleSheet.create({
    surface : {
        width: '100%',
        height: '100%'
    },
    surfaceView : {
        width: '75%',
        height: '92%',
        marginBottom: '8%'
    }
});


export default HelloBlue;
