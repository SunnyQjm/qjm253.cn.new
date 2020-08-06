import React from "react";
import Konva from "konva";
import {
    Stage, Layer, Star, Text, Ellipse, Rect
} from 'react-konva';
import BaseComponent, {BaseComponentProps, BaseComponentState} from "../base/BaseComponent";

interface MeteorEffectBgComponentProps extends BaseComponentProps {

}

interface MeteorEffectBgComponentState extends BaseComponentState {

}

/**
 * 流星雨特效
 */
export default class MeteorEffectBgComponent extends BaseComponent<MeteorEffectBgComponentProps, MeteorEffectBgComponentState> {

    static maxRadiusXSize = 30;
    static minRadiusXSize = 20;
    static maxRotation = 40;
    static minRotation = 40;
    static maxY = 0.1;
    static minY = 0;
    static maxX = 0.8;
    static minX = -0.1;
    static maxDuration = 2;
    static minDuration = 1.5;

    static getRandomValue(minValue: number, maxValue: number, base?: number) {
        const _base = base ? base : 1;
        return (minValue + Math.random() * (maxValue - minValue)) * _base;
    }


    /**
     * 在鼠标点击位置画一个魔法特效
     */
    drawMagicEffect = (e: Konva.KonvaEventObject<MouseEvent>) => {
        // console.log(`(${e.evt.x}, ${e.evt.y})`, e.evt)
        const {x, y} = e.evt;
        const baseSize = 50;
        const strokeWidth = 0.5;
        const color = Konva.Util.getRandomColor();
        const shadowConfig = {
            shadowColor: 'gray',
            shadowBlur: 0,
            shadowOffset: {x: 10, y: 10},
            shadowOpacity: 0.5,
        };
        const duration = 1.2;

        const magicEffectGroup = new Konva.Group({
            x,
            y,
        });
        const rect1 = new Konva.Rect({
            x: 0,
            y: 0,
            width: 2 * baseSize,
            height: 2 * baseSize,
            stroke: color,
            strokeWidth: strokeWidth,
            offset: {
                x: baseSize,
                y: baseSize
            },
            ...shadowConfig
        });
        const rect2 = rect1.clone();
        rect2.rotation(45);

        const complexCircle1 = new Konva.Group({
            x: 0,
            y: 0,
        });

        const circle1 = new Konva.Circle({
            radius: Math.sqrt(2) * (baseSize * 2 / 5),
            stroke: color,
            strokeWidth: strokeWidth,
            ...shadowConfig
        })
        const circle2 = new Konva.Circle({
            radius: Math.sqrt(2) * (baseSize / 2),
            stroke: color,
            strokeWidth: strokeWidth,
            ...shadowConfig
        })

        const centerRectConfig = {
            x: 0,
            y: 0,
            offset: {
                x: baseSize * 2 / 5,
                y: baseSize * 2 / 5
            },
            stroke: color,
            strokeWidth: strokeWidth,
            width: baseSize * 4 / 5,
            height: baseSize * 4 / 5,
        }
        const rect3 = new Konva.Rect(centerRectConfig);
        const rect4 = rect3.clone();
        rect4.rotate(30);
        const rect5 = rect3.clone();
        rect5.rotate(60);

        const hexagon = new Konva.RegularPolygon({
            x: 0,
            y: 0,
            sides: 6,
            radius: baseSize / 10,
            strokeWidth: strokeWidth,
            stroke: color,
            offset: {
                x: 0,
                y: 0,
            },
            scaleY: (Math.sqrt(2) * baseSize * 2 / 5) / (baseSize / 10),
        })
        const hexagon2 = hexagon.clone();
        hexagon2.rotate(30);
        const hexagon3 = hexagon.clone();
        hexagon3.rotate(60);
        const hexagon4 = hexagon.clone();
        hexagon4.rotate(90);
        const hexagon5 = hexagon.clone();
        hexagon5.rotate(120);
        const hexagon6 = hexagon.clone();
        hexagon6.rotate(150);

        complexCircle1.add(circle1);
        complexCircle1.add(circle2);
        complexCircle1.add(rect3);
        complexCircle1.add(rect4);
        complexCircle1.add(rect5);

        complexCircle1.add(hexagon);
        complexCircle1.add(hexagon2);
        complexCircle1.add(hexagon3);
        complexCircle1.add(hexagon4);
        complexCircle1.add(hexagon5);
        complexCircle1.add(hexagon6);

        const clipCircle = new Konva.Circle({
            radius: baseSize * 2 / 5,
            x: 0,
            y: 0,
            fill: color,
            globalCompositeOperation: 'destination-out'
        });

        const complexCircle2 = complexCircle1.clone();
        complexCircle2.scaleX(0.5);
        complexCircle2.scaleY(0.5);

        const magicCircle = new Konva.Group({
            x: 0,
            y: 0,
        });
        magicCircle.add(complexCircle1);
        magicCircle.add(clipCircle);
        magicCircle.add(complexCircle2);

        const R = baseSize;
        const l1 = R * Math.cos(67.5 * Math.PI / 180);
        const l2 = R * Math.sin(67.5 * Math.PI / 180);
        const edgeLittleMagicCircle = complexCircle1.clone();
        edgeLittleMagicCircle.scale({
            x: 0.4,
            y: 0.4
        });
        const edgeLittleMagicCircle2 = edgeLittleMagicCircle.clone();
        const edgeLittleMagicCircle3 = edgeLittleMagicCircle.clone();
        const edgeLittleMagicCircle4 = edgeLittleMagicCircle.clone();
        const edgeLittleMagicCircle5 = edgeLittleMagicCircle.clone();
        const edgeLittleMagicCircle6 = edgeLittleMagicCircle.clone();
        const edgeLittleMagicCircle7 = edgeLittleMagicCircle.clone();
        const edgeLittleMagicCircle8 = edgeLittleMagicCircle.clone();
        edgeLittleMagicCircle.move({
            x: -l1,
            y: -l2
        });
        edgeLittleMagicCircle2.move({
            x: l1,
            y: -l2
        });
        edgeLittleMagicCircle3.move({
            x: l2,
            y: -l1
        });
        edgeLittleMagicCircle4.move({
            x: l2,
            y: l1
        });
        edgeLittleMagicCircle5.move({
            x: l1,
            y: l2
        });
        edgeLittleMagicCircle6.move({
            x: -l1,
            y: l2
        });
        edgeLittleMagicCircle7.move({
            x: -l2,
            y: l1
        });
        edgeLittleMagicCircle8.move({
            x: -l2,
            y: -l1
        });

        magicEffectGroup.add(rect1);
        magicEffectGroup.add(rect2);
        magicEffectGroup.add(magicCircle);
        magicEffectGroup.add(edgeLittleMagicCircle);
        magicEffectGroup.add(edgeLittleMagicCircle2);
        magicEffectGroup.add(edgeLittleMagicCircle3);
        magicEffectGroup.add(edgeLittleMagicCircle4);
        magicEffectGroup.add(edgeLittleMagicCircle5);
        magicEffectGroup.add(edgeLittleMagicCircle6);
        magicEffectGroup.add(edgeLittleMagicCircle7);
        magicEffectGroup.add(edgeLittleMagicCircle8);

        this._layer?.add(magicEffectGroup);

        magicCircle.to({
            duration: duration,
            rotation: -360,
            speed: 2,
            easing: Konva.Easings.EaseOut,
            repeat: true,
            // onFinish: () => {
                // magicEffectGroup.remove();
            // }
        });
        magicEffectGroup.scale({
            x: 0.3,
            y: 0.3
        });
        magicEffectGroup.to({
            duration: duration,
            rotation: 180,
            scaleX: 0.8,
            scaleY: 0.8,
            easing: Konva.Easings.EaseOut,
            onFinish: () => {
                setTimeout(() => {
                    magicEffectGroup.remove();
                }, 100);
            }
        });

        this._layer?.draw();
    }

    componentDidMount() {
        setInterval(() => {
            if (this._layer) {
                // 随机生成一个流星雨点，自左上划空而下
                Math.random();
                const elipse = new Konva.Ellipse({
                    radiusX: MeteorEffectBgComponent.getRandomValue(MeteorEffectBgComponent.minRadiusXSize, MeteorEffectBgComponent.maxRadiusXSize),
                    radiusY: 1,
                    fill: 'white',
                    x: MeteorEffectBgComponent.getRandomValue(MeteorEffectBgComponent.minX, MeteorEffectBgComponent.maxX, window.innerWidth),
                    y: MeteorEffectBgComponent.getRandomValue(MeteorEffectBgComponent.minY, MeteorEffectBgComponent.maxY, window.innerHeight),
                    opacity: 0.3,
                    rotation: MeteorEffectBgComponent.getRandomValue(MeteorEffectBgComponent.minRotation, MeteorEffectBgComponent.maxRotation),
                });
                this._layer.add(elipse)
                this._layer.draw();
                elipse.to({
                    duration: MeteorEffectBgComponent.getRandomValue(MeteorEffectBgComponent.minDuration, MeteorEffectBgComponent.maxDuration),
                    x: (window.innerHeight - elipse.y()) / Math.tan(elipse.rotation() * Math.PI / 180) + elipse.x(),
                    y: window.innerHeight,
                    strokeWidth: 6,
                    // scaleX: 1.5,
                    onFinish: () => {
                        elipse.remove();
                    }
                })
            }
        }, 80);
    }

    private _layer?: Konva.Layer;


    render() {
        return (
            <Stage width={window.innerWidth} height={window.innerHeight} style={{
                position: 'fixed',
                left: 0,
                top: 0,
                zIndex: 0
            }} onClick={(e) => {
                this.drawMagicEffect(e);
            }}>
                <Layer ref={node => {
                    if (node) {
                        this._layer = node;
                    }
                }}>
                </Layer>
            </Stage>
        );
    }
}