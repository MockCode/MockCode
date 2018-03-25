import React from "react";
import { Animated, StyleSheet, View} from "react-native";
import { Surface } from "gl-react-native";
import { Shaders, Node, GLSL } from "gl-react";

const stateForTime = (t) => ({
    plot : [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5],
    timeStep: (t / 10000) % 1,
    plotStep: Math.floor((t / 10000) % 1 * 50),
    time: t,
});

class WaveformCanvas extends React.Component {
    
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
        const { timeStep, plot, plotStep } = this.state
        return(
            <Animated.View style={styles.surfaceView}>
            <Surface style={styles.surface}>
            <Node
            uniforms={{
                timeStep,
                plot,
                plotStep,
            }}
            shader={{
                frag: `
                precision highp float;
                varying vec2 uv;
                uniform float time;
                uniform float timeStep;
                uniform int plotStep;
                uniform float plot[50];

                float cursorWidth = 0.05;

                float Curve(float x, float y)
                {
                    //return abs(x-y);
                    return clamp(4. - abs(x-y) * 64., 0.0, 1.0);
                }

                float intersect (float a, float b)
                {
                        return a + b;
                }

                void main () {
                    gl_FragColor = vec4(0.);
                    gl_FragColor += vec4(intersect(Curve(plot[plotStep] * 2., uv.y), Curve(uv.x, timeStep)));
                }
                `
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


export default WaveformCanvas;
