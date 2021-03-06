'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * @file 二维向量
 * @author qiaogang
 *
 */

var ArrayCons = typeof Float32Array === 'undefined' ? Array : Float32Array;

var vector = {
    /**
     * 创建一个向量
     * @param {number=0} x
     * @param {number=0} y
     * @return {Vector}
     */
    create: function create() {
        var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        var out = new ArrayCons(2);
        out[0] = x;
        out[1] = y;

        return out;
    },


    /**
     * 复制向量数据
     * @param {Vector} out
     * @param {Vector} v
     * @return {Vector}
     */
    copy: function copy(out, v) {
        out[0] = v[0];
        out[1] = v[1];

        return out;
    },


    /**
     * 克隆一个向量
     * @param {Vector} v
     * @return {Vector}
     */
    clone: function clone(v) {
        var out = new ArrayCons(2);
        out[0] = v[0];
        out[1] = v[1];

        return out;
    },


    /**
     * 设置向量的两个项
     * @param {Vector} out
     * @param {number} x
     * @param {number} y
     * @return {Vector} 结果
     */
    set: function set(out, x, y) {
        out[0] = x;
        out[1] = y;

        return out;
    },


    /**
     * 向量相加
     * @param {Vector} out
     * @param {Vector} v1
     * @param {Vector} v2
     */
    add: function add(out, v1, v2) {
        out[0] = v1[0] + v2[0];
        out[1] = v1[1] + v2[1];

        return out;
    },


    /**
     * 向量缩放后相加
     * @param {Vector} out
     * @param {Vector} v1
     * @param {Vector} v2
     * @param {number} scale
     */
    scaleAndAdd: function scaleAndAdd(out, v1, v2, scale) {
        out[0] = v1[0] + v2[0] * scale;
        out[1] = v1[1] + v2[1] * scale;

        return out;
    },


    /**
     * 向量相减
     * @param {Vector} out
     * @param {Vector} v1
     * @param {Vector} v2
     */
    sub: function sub(out, v1, v2) {
        out[0] = v1[0] - v2[0];
        out[1] = v1[1] - v2[1];

        return out;
    },


    /**
     * 向量长度
     * @param {Vector} v
     * @return {number}
     */
    length: function length(v) {
        return Math.sqrt(this.lengthSquare(v));
    },


    /**
     * 向量长度平方
     * @param {Vector} v
     * @return {number}
     */
    lengthSquare: function lengthSquare(v) {
        return v[0] * v[0] + v[1] * v[1];
    },


    /**
     * 向量乘法
     * @param {Vector} out
     * @param {Vector} v1
     * @param {Vector} v2
     */
    multiply: function multiply(out, v1, v2) {
        out[0] = v1[0] * v2[0];
        out[1] = v1[1] * v2[1];

        return out;
    },


    /**
     * 向量除法
     * @param {Vector} out
     * @param {Vector} v1
     * @param {Vector} v2
     */
    divide: function divide(out, v1, v2) {
        out[0] = v1[0] / v2[0];
        out[1] = v1[1] / v2[1];

        return out;
    },


    /**
     * 向量点乘
     * @param {Vector} v1
     * @param {Vector} v2
     * @return {number}
     */
    dot: function dot(v1, v2) {
        return v1[0] * v2[0] + v1[1] * v2[1];
    },


    /**
     * 向量缩放
     * @param {Vector} out
     * @param {Vector} v
     * @param {number} s
     */
    scale: function scale(out, v, s) {
        out[0] = v[0] * s;
        out[1] = v[1] * s;

        return out;
    },


    /**
     * 向量归一化
     * @param {Vector} out
     * @param {Vector} v
     */
    normalize: function normalize(out, v) {
        var d = this.len(v);

        if (d === 0) {
            out[0] = 0;
            out[1] = 0;
        } else {
            out[0] = v[0] / d;
            out[1] = v[1] / d;
        }

        return out;
    },


    /**
     * 计算向量间距离
     * @param {Vector} v1
     * @param {Vector} v2
     * @return {number}
     */
    distance: function distance(v1, v2) {
        return Math.sqrt(this.distanceSquare(v1, v2));
    },


    /**
     * 向量距离平方
     * @param {Vector} v1
     * @param {Vector} v2
     * @return {number}
     */
    distanceSquare: function distanceSquare(v1, v2) {
        return (v1[0] - v2[0]) * (v1[0] - v2[0]) + (v1[1] - v2[1]) * (v1[1] - v2[1]);
    },


    /**
     * 求负向量
     * @param {Vector} out
     * @param {Vector} v
     */
    negate: function negate(out, v) {
        out[0] = -v[0];
        out[1] = -v[1];

        return out;
    },


    /**
     * 插值两个点
     * @param {Vector} out
     * @param {Vector} v1
     * @param {Vector} v2
     * @param {number} t
     */
    lerp: function lerp(out, v1, v2, t) {
        out[0] = v1[0] + t * (v2[0] - v1[0]);
        out[1] = v1[1] + t * (v2[1] - v1[1]);

        return out;
    },


    /**
     * 矩阵左乘向量
     * @param {Vector} out
     * @param {Vector} v
     * @param {Vector} m
     */
    applyTransform: function applyTransform(out, v, m) {
        var x = v[0];
        var y = v[1];

        out[0] = m[0] * x + m[2] * y + m[4];
        out[1] = m[1] * x + m[3] * y + m[5];

        return out;
    },


    /**
     * 求两个向量最小值
     * @param  {Vector} out
     * @param  {Vector} v1
     * @param  {Vector} v2
     */
    min: function min(out, v1, v2) {
        out[0] = Math.min(v1[0], v2[0]);
        out[1] = Math.min(v1[1], v2[1]);

        return out;
    },

    /**
     * 求两个向量最大值
     * @param  {Vector} out
     * @param  {Vector} v1
     * @param  {Vector} v2
     */
    max: function max(out, v1, v2) {
        out[0] = Math.max(v1[0], v2[0]);
        out[1] = Math.max(v1[1], v2[1]);

        return out;
    },


    /**
     * 计算向量夹角
     * @param v1
     * @param v2
     * @returns {number}
     */
    getAngle: function getAngle(v1, v2) {
        var angle = 0;
        var _dx = v1[0] - v2[0];
        if (_dx != 0) {
            // TODO: 寻找更加高效的计算夹角的方法, 考虑夹角计算放进vector中
            angle = Math.atan2(v1[1] - v2[1], v1[0] - v2[0]);
        }

        return angle;
    }
};

vector.len = vector.length;
vector.lenSquare = vector.lengthSquare;
vector.dist = vector.distance;
vector.distSquare = vector.distanceSquare;

exports['default'] = vector;