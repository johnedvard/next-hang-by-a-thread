import {init as $5OpyM$init, initInput as $5OpyM$initInput, GameLoop as $5OpyM$GameLoop, on as $5OpyM$on, off as $5OpyM$off, emit as $5OpyM$emit, Vector as $5OpyM$Vector, Sprite as $5OpyM$Sprite, keyPressed as $5OpyM$keyPressed, gamepadPressed as $5OpyM$gamepadPressed, onInput as $5OpyM$onInput, onGamepad as $5OpyM$onGamepad, offInput as $5OpyM$offInput, offGamepad as $5OpyM$offGamepad, Pool as $5OpyM$Pool} from "kontra";

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
var $f7b966ebd58fd322$exports = {};
$f7b966ebd58fd322$exports = ":root {\n  --bgc: #211e20;\n  --bgc2: #555568;\n  --fgc: #a0a08b;\n  --fgc2: #e9efec;\n  --acc: #e20fa0;\n}\n\nbody {\n  width: 100vw;\n  height: 100vh;\n  background-color: var(--bgc);\n  color: var(--fgc2);\n  margin: 0;\n  padding: 0;\n  font-family: sans-serif;\n  font-size: 1em;\n}\n\n#wrap {\n  position: relative;\n}\n\nbody, #wrap {\n  flex-flow: column;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n}\n\ncanvas {\n  height: auto;\n  max-width: 90vw;\n  max-height: 90vh;\n  background-color: var(--bgc);\n}\n\n#game-canvas {\n  border: 3px solid var(--fgc2);\n}\n\n.menu {\n  color: var(--fgc2);\n  flex-direction: row-reverse;\n  align-content: center;\n  align-items: center;\n  padding: 10px 20px;\n  font-size: 23px;\n  font-weight: 600;\n  display: flex;\n  position: absolute;\n}\n\n#r-menu {\n  top: 0;\n  right: 0;\n}\n\n#music-btn {\n  margin-top: 50px;\n}\n\n.flat {\n  background-color: inherit;\n  color: var(--fgc2);\n  border: 3px solid var(--fgc2);\n}\n\n#hamburger {\n  height: 9px;\n  cursor: pointer;\n  flex-direction: column;\n  align-items: center;\n  line-height: .4;\n  display: flex;\n}\n\n#hint {\n  white-space: pre-wrap;\n  text-align: center;\n  font-size: 2vmin;\n  position: absolute;\n  bottom: 5%;\n}\n\n#hamburger, #hamburger:after, #hamburger:before {\n  content: \"––\";\n}\n\n#hamburger:hover {\n  filter: drop-shadow(0 0 12px var(--acc));\n}\n\nbutton, .btn {\n  width: 240px;\n  height: 50px;\n  background-color: var(--fgc2);\n  color: var(--bgc);\n  cursor: pointer;\n  border: none;\n  border-radius: 4px;\n  margin-top: 20px;\n  font-size: 16px;\n  font-weight: 600;\n}\n\nbutton.disabled {\n  color: #a9a9a9;\n  cursor: not-allowed;\n  background-color: #d3d3d3;\n}\n\nbutton.disabled img {\n  filter: contrast(.5);\n}\n\nbutton:hover, .btn:hover {\n  background-color: var(--bgc2);\n  color: var(--fgc2);\n}\n\nbutton:hover img {\n  filter: none;\n}\n\n#coil-subscriber {\n  height: 50px;\n}\n\n#coil-btn {\n  width: 400px;\n  height: 50px;\n  justify-content: center;\n  align-items: center;\n  text-decoration: none;\n  display: flex;\n}\n\n.overlay {\n  width: 100%;\n  height: 100%;\n  background-color: var(--bgc);\n  text-align: center;\n  flex-direction: column;\n  place-content: center;\n  align-items: center;\n  display: flex;\n  position: absolute;\n}\n\n#thanks {\n  width: 80%;\n  height: 80%;\n}\n\n.level-item {\n  cursor: pointer;\n  aspect-ratio: 1 / 1;\n  width: 60%;\n  height: auto;\n  max-height: 70%;\n  background-color: var(--fgc);\n  border-radius: 4px;\n  flex-flow: column;\n  justify-content: center;\n  align-self: center;\n  align-items: center;\n  display: flex;\n}\n\n.level-item img {\n  width: 100%;\n  height: auto;\n}\n\n.level-item img:not(.collected) {\n  filter: grayscale();\n}\n\n#levels-grid, #bonus-grid, #near-levels-grid {\n  width: 100%;\n  height: 100%;\n  scroll-behavior: smooth;\n  grid-template-columns: repeat(3, minmax(auto, 150px));\n  grid-auto-rows: minmax(120px, min-content);\n  place-content: center;\n  place-items: stretch center;\n  display: grid;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n\n#bonus-grid {\n  align-content: stretch;\n  row-gap: 60px;\n}\n\n#near-levels-grid {\n  grid-template-columns: repeat(2, 1fr);\n}\n\n#near-levels-grid .level-item {\n  width: 250px;\n  height: 300px;\n  cursor: pointer;\n  flex-flow: column;\n}\n\n#bonus-grid {\n  row-gap: 0;\n}\n\n#level-dialog {\n  width: 50%;\n  height: 50%;\n  background-color: #121212ee;\n  border: 1px solid #fff;\n  border-radius: 4px;\n}\n\n.bonus-item {\n  cursor: pointer;\n  background: none;\n  border-radius: 4px;\n  margin-bottom: -60px;\n}\n\n.bonus-item:hover:not(.disabled) {\n  transform: scale(1.1);\n}\n\n.bonus-item.disabled {\n  filter: contrast(.5);\n  cursor: not-allowed;\n  background-color: #000;\n}\n\n#bonus-grid > canvas {\n  width: 200px;\n  height: 200px;\n  max-width: 100%;\n  max-height: 100%;\n  object-fit: contain;\n}\n\n#loading-wrapper {\n  z-index: 99;\n  background-color: #211e2055;\n}\n\n#loading {\n  border: 16px solid var(--fgc2);\n  border-top: 16px solid var(--acc);\n  width: 120px;\n  height: 120px;\n  border-radius: 50%;\n  animation: spin 2s linear infinite;\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n.bone {\n  cursor: pointer;\n  cursor: pointer;\n  font-size: 32px;\n  position: absolute;\n  top: 1%;\n  right: 1%;\n}\n\n.bone:hover {\n  filter: drop-shadow(0 0 12px var(--acc)) brightness(1.3);\n}\n\n.inverse {\n  position: absolute;\n  top: -1px;\n  left: -2px;\n  transform: rotate(90deg);\n}\n\n.hide {\n  display: none !important;\n}\n\n.flash {\n  background-color: var(--bgc2);\n}\n\n";



const $220bba84f7fe45a2$export$e8c65303a1194bed = "g";
const $220bba84f7fe45a2$export$4ead073115553bb7 = "a";
const $220bba84f7fe45a2$export$da19d49432696ac7 = "l";
const $220bba84f7fe45a2$export$928e03e3b19fe4eb = "levelQuit";
const $220bba84f7fe45a2$export$477b7c468f24ebf0 = "c";
const $220bba84f7fe45a2$export$debaf4c17437db2 = "s";
const $220bba84f7fe45a2$export$7f2929ff5c768762 = "r";
const $220bba84f7fe45a2$export$926b6e2a809d39cd = "x";
const $220bba84f7fe45a2$export$b39240f05624b9dc = "i";
const $220bba84f7fe45a2$export$807f9aaae0f2b8b2 = "n";
const $220bba84f7fe45a2$export$bea3f4010df47846 = "b";
const $220bba84f7fe45a2$export$2a6caf3f9472a7c1 = "p";
const $220bba84f7fe45a2$export$4894a45bbf13eea7 = "d";
const $220bba84f7fe45a2$export$221614c934546623 = "t";
const $220bba84f7fe45a2$export$c082a3872766a1e3 = "adPlaying";
const $220bba84f7fe45a2$export$72e9be3220a7f307 = "adFinished";



const $b821213835d3b8e1$export$5b742e11b42f7940 = "ew";
const $b821213835d3b8e1$export$844e82d71f4a8543 = "ns";
// Smooth(er)step, https://en.wikipedia.org/wiki/Smoothstep, (outputs number between 0 and 1)
const $b821213835d3b8e1$var$smoothstep = (min, max, x)=>{
    let normalizedPosX = Math.max(0, Math.min(1, (x - min) / (max - min)));
    const smoothStep = normalizedPosX * normalizedPosX * normalizedPosX * (normalizedPosX * (normalizedPosX * 6 - 15) + 10);
    return smoothStep;
};
const $b821213835d3b8e1$export$e0a22ef603f98592 = ({ behavior: behavior , direction: direction , distance: distance , orgX: orgX , orgY: orgY , x: x , y: y , dt: dt ,  })=>{
    let axis = "";
    let multiplier = 1;
    let newDirection = direction;
    const westEdge = orgX - distance;
    const eastEdge = orgX + distance;
    const northEdge = orgY - distance;
    const southEdge = orgY + distance;
    const edgeOffset = 35; // smoothstep will never reach the edge, add offset to make the behavior change direction
    switch(behavior){
        case $b821213835d3b8e1$export$844e82d71f4a8543:
            axis = "y";
            break;
        case $b821213835d3b8e1$export$5b742e11b42f7940:
            axis = "x";
            break;
    }
    let smoothSpeed = {
        x: $b821213835d3b8e1$var$smoothstep(westEdge, eastEdge, x),
        y: $b821213835d3b8e1$var$smoothstep(northEdge, southEdge, y)
    };
    switch(direction){
        case "n":
            multiplier = -1;
            if (smoothSpeed.y < 0.05) newDirection = "s";
            break;
        case "s":
            multiplier = 1;
            if (smoothSpeed.y > 0.95) newDirection = "n";
            break;
        case "e":
            multiplier = 1;
            if (smoothSpeed.x > 0.95) newDirection = "w";
            break;
        case "w":
            multiplier = -1;
            if (smoothSpeed.x < 0.05) newDirection = "e";
            break;
    }
    // swing between 0 and 0.5, making the center point 0.5, and the edges 0 (e.g [0 <-> 0.5 <-> 0])
    if (x > orgX) smoothSpeed.x = Math.abs(1 - smoothSpeed.x);
    if (y > orgY) smoothSpeed.y = Math.abs(1 - smoothSpeed.y);
    smoothSpeed.x = smoothSpeed.x * multiplier * 5;
    smoothSpeed.y = smoothSpeed.y * multiplier * 5;
    return {
        axis: axis,
        newDirection: newDirection,
        smoothSpeed: smoothSpeed
    };
};
const $b821213835d3b8e1$export$fcce7887255d1c69 = (behavior, distance)=>{
    let direction = "";
    if (distance < 0) direction = behavior === $b821213835d3b8e1$export$5b742e11b42f7940 ? "w" : "n";
    else direction = behavior === $b821213835d3b8e1$export$5b742e11b42f7940 ? "e" : "s";
    return direction;
};


class $f753dceb5995f447$export$d763173d10f54f27 {
    x;
    y;
    level;
    width = 32;
    height = 32;
    speed = 1;
    phase = 1 - Math.random() * 2;
    waveDir = 1;
    constructor(x, y, { level: level , behavior: behavior , distance: distance  }){
        this.direction = (0, $b821213835d3b8e1$export$fcce7887255d1c69)(behavior, distance);
        this.distance = Math.abs(distance);
        this.behavior = behavior;
        this.orgX = x;
        this.orgY = y;
        this.x = x;
        this.y = y;
        this.level = level;
    }
    getSmallCollisionBox() {
        return {
            x: this.x + 10,
            y: this.y + 10,
            width: 12,
            height: 12
        };
    }
    update(dt) {
        const { axis: axis , newDirection: newDirection , smoothSpeed: smoothSpeed  } = (0, $b821213835d3b8e1$export$e0a22ef603f98592)({
            behavior: this.behavior,
            distance: this.distance,
            direction: this.direction,
            x: this.x,
            y: this.y,
            orgX: this.orgX,
            orgY: this.orgY,
            dt: dt
        });
        this.direction = newDirection;
        this[axis] += this.speed * smoothSpeed[axis];
        this.updateWaterBlur(dt);
    }
    updateWaterBlur(dt) {
        if (this.phase <= -2) this.waveDir = 1;
        else if (this.phase >= 2) this.waveDir = -1;
        this.phase += dt * this.waveDir * 3;
    }
    render(ctx) {
        if (!ctx) return;
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.quadraticCurveTo(this.x + this.phase * 2, this.y + this.height / 4 + Math.abs(this.phase * 5), this.x, this.y + this.height);
        ctx.moveTo(this.x + this.width, this.y);
        ctx.quadraticCurveTo(this.x + +this.width + this.phase * 2, this.y + this.height / 4 + Math.abs(this.phase * 5), this.x + this.width, this.y + this.height);
        ctx.moveTo(this.x + this.phase / 5, this.y);
        ctx.lineTo(this.x + this.phase / 5 + this.width, this.y);
        ctx.moveTo(this.x + this.phase / 5, this.y + this.height);
        ctx.lineTo(this.x + this.phase / 5 + this.width, this.y + this.height);
        // ctx.rect(this.x, this.y, this.width, this.height); // Render collision box
        // ctx.rect(this.x + 10 + this.phase / 5, this.y + 10, 12, 12);
        ctx.stroke();
    }
}




// zzfxV - global volume
const $3cad711e48be59be$var$zzfxV = 0.3;
// zzfxR - global sample rate
const $3cad711e48be59be$var$zzfxR = 44100;
const $3cad711e48be59be$var$initZzfx = ()=>{
    if (typeof window !== "undefined") {
        // Client-side-only code
        window.zzfxR = $3cad711e48be59be$var$zzfxR;
        // zzfxX - the common audio context
        window.zzfxX = new (window.AudioContext || webkitAudioContext)();
        // zzfxG() - the sound generator -- returns an array of sample data
        window.zzfxG = (q = 1, k = 0.05, c = 220, e = 0, t = 0, u = 0.1, r = 0, F = 1, v = 0, z = 0, w = 0, A = 0, l = 0, B = 0, x = 0, G = 0, d = 0, y = 1, m = 0, C = 0)=>{
            let b = 2 * Math.PI, H = v *= 500 * b / $3cad711e48be59be$var$zzfxR ** 2, I = (0 < x ? 1 : -1) * b / 4, D = c *= (1 + 2 * k * Math.random() - k) * b / $3cad711e48be59be$var$zzfxR, Z = [], g = 0, E = 0, a = 0, n = 1, J = 0, K = 0, f = 0, p, h;
            e = 99 + $3cad711e48be59be$var$zzfxR * e;
            m *= $3cad711e48be59be$var$zzfxR;
            t *= $3cad711e48be59be$var$zzfxR;
            u *= $3cad711e48be59be$var$zzfxR;
            d *= $3cad711e48be59be$var$zzfxR;
            z *= 500 * b / $3cad711e48be59be$var$zzfxR ** 3;
            x *= b / $3cad711e48be59be$var$zzfxR;
            w *= b / $3cad711e48be59be$var$zzfxR;
            A *= $3cad711e48be59be$var$zzfxR;
            l = $3cad711e48be59be$var$zzfxR * l | 0;
            for(h = e + m + t + u + d | 0; a < h; Z[a++] = f)++K % (100 * G | 0) || (f = r ? 1 < r ? 2 < r ? 3 < r ? Math.sin((g % b) ** 3) : Math.max(Math.min(Math.tan(g), 1), -1) : 1 - (2 * g / b % 2 + 2) % 2 : 1 - 4 * Math.abs(Math.round(g / b) - g / b) : Math.sin(g), f = (l ? 1 - C + C * Math.sin(2 * Math.PI * a / l) : 1) * (0 < f ? 1 : -1) * Math.abs(f) ** F * q * $3cad711e48be59be$var$zzfxV * (a < e ? a / e : a < e + m ? 1 - (a - e) / m * (1 - y) : a < e + m + t ? y : a < h - d ? (h - a - d) / u * y : 0), f = d ? f / 2 + (d > a ? 0 : (a < h - d ? 1 : (h - a) / d) * Z[a - d | 0] / 2) : f), p = (c += v += z) * Math.sin(E * x - I), g += p - p * B * (1 - 1e9 * (Math.sin(a) + 1) % 2), E += p - p * B * (1 - 1e9 * (Math.sin(a) ** 2 + 1) % 2), n && ++n > A && (c += w, D += w, n = 0), !l || ++J % l || (c = D, v = H, n = n || 1);
            return Z;
        };
    }
};
$3cad711e48be59be$var$initZzfx();
const $3cad711e48be59be$export$8eb2d0959e893a61 = (...t)=>$3cad711e48be59be$export$2e47e8a49fc6e938(zzfxG(...t));
const $3cad711e48be59be$export$2e47e8a49fc6e938 = (...t)=>{
    if (typeof window !== "undefined") {
        const ctx = new (window.AudioContext || webkitAudioContext)();
        let e = ctx.createBufferSource(), f = ctx.createBuffer(t.length, t[0].length, $3cad711e48be59be$var$zzfxR);
        t.map((d, i)=>f.getChannelData(i).set(d)), e.buffer = f, e.connect(ctx.destination), e.start();
        return e;
    }
};


const $6431d64b4099ba76$export$dd97a93ab7d40d61 = (n, f, t, e = 125)=>{
    let l, o, z, r, g, h, x, a, u, c, d, i, m, p, G, M = 0, R = [], b = [], j = [], k = 0, q = 0, s = 1, v = {}, w = window.zzfxR / e * 60 >> 2;
    for(; s; k++)R = [
        s = a = d = m = 0
    ], t.map((e, d)=>{
        for(x = f[e][k] || [
            0,
            0,
            0
        ], s |= !!f[e][k], G = m + (f[e][0].length - 2 - !a) * w, p = d == t.length - 1, o = 2, r = m; o < x.length + p; a = ++o){
            for(g = x[o], u = o == x.length + p - 1 && p || c != (x[0] || 0) | g | 0, z = 0; z < w && a; (z++) > w - 99 && u && (i += (i < 1) / 99))h = (1 - i) * R[M++] / 2 || 0, b[r] = (b[r] || 0) - h * q + h, j[r] = (j[r++] || 0) + h * q + h;
            g && (i = g % 1, q = x[1] || 0, (g |= 0) && (R = v[[
                c = x[M = 0] || 0,
                g
            ]] = v[[
                c,
                g
            ]] || (l = [
                ...n[c]
            ], l[2] *= 2 ** ((g - 12) / 12), g > 0 ? window.zzfxG(...l) : [])));
        }
        m = G;
    });
    return [
        b,
        j
    ];
};


let $7acb7b9615020448$var$isMusicEnabled = false;
let $7acb7b9615020448$var$myAudioNode = null;
let $7acb7b9615020448$var$isPlaying = false;
let $7acb7b9615020448$var$audioContext;
if (typeof window !== "undefined") $7acb7b9615020448$var$audioContext = window.zzfxX;
const $7acb7b9615020448$export$5bd2ea603f7bce4d = ()=>{
    return $7acb7b9615020448$var$isMusicEnabled;
};
const $7acb7b9615020448$export$d0b7c8c6bd077e5e = ()=>{
    return $7acb7b9615020448$var$isPlaying;
};
const $7acb7b9615020448$export$bf0aa7ea9e7d070b = ()=>{
    $7acb7b9615020448$var$isPlaying = false;
    $7acb7b9615020448$var$audioContext.suspend();
};
const $7acb7b9615020448$export$a5f0c5f1e1d664d6 = ()=>{
    if ($7acb7b9615020448$var$isPlaying) {
        $7acb7b9615020448$var$isMusicEnabled = false;
        $7acb7b9615020448$export$bf0aa7ea9e7d070b();
    } else {
        $7acb7b9615020448$var$isMusicEnabled = true;
        $7acb7b9615020448$export$20b96bc11c72c2bc();
    }
};
const $7acb7b9615020448$export$3ecb8e4d1ea6b1d1 = ()=>{
    (0, $3cad711e48be59be$export$8eb2d0959e893a61)(...[
        ,
        1,
        7,
        0.02,
        0.01,
        0.02,
        4,
        0.5,
        ,
        ,
        1,
        0.01,
        ,
        ,
        150,
        ,
        0.21,
        ,
        0.01
    ]); // Blip 273
};
const $7acb7b9615020448$export$dfec8206b16feb46 = ()=>{
    (0, $3cad711e48be59be$export$8eb2d0959e893a61)(...[
        ,
        ,
        326,
        ,
        0.06,
        0.08,
        1,
        0.95,
        -6.8,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        0.45,
        0.08
    ]); // Jump 299
};
const $7acb7b9615020448$export$832e2aec58fb1949 = ()=>{
    (0, $3cad711e48be59be$export$8eb2d0959e893a61)(...[
        ,
        ,
        269,
        0.07,
        0.21,
        0.3,
        1,
        0.94,
        8.3,
        -0.2,
        284,
        0.12,
        0.12,
        ,
        ,
        ,
        0.13,
        0.75,
        0.17, 
    ]); // Powerup 397
};
const $7acb7b9615020448$export$17995baf9bf3e532 = ()=>{
    (0, $3cad711e48be59be$export$8eb2d0959e893a61)(...[
        ,
        ,
        607,
        0.01,
        0.03,
        0.13,
        1,
        1.56,
        ,
        ,
        -490,
        0.04,
        0.02,
        ,
        ,
        ,
        ,
        0.47,
        0.02,
        0.03, 
    ]); // Pickup 368
};
const $7acb7b9615020448$export$7f27a169e6c9ae3 = ()=>{
    (0, $3cad711e48be59be$export$8eb2d0959e893a61)(...[
        ,
        ,
        1081,
        0.01,
        0.01,
        0.02,
        4,
        1.1,
        14,
        32,
        ,
        ,
        ,
        0.8,
        ,
        ,
        0.06,
        0.66
    ]); // Blip 329
};
const $7acb7b9615020448$export$20b96bc11c72c2bc = ()=>{
    $7acb7b9615020448$var$isPlaying = true;
    if ($7acb7b9615020448$var$myAudioNode) {
        $7acb7b9615020448$var$audioContext.resume();
        return;
    }
    const song = [
        [
            [
                0.5,
                0,
                245,
                0.07,
                0.1,
                0.65,
                ,
                1.5,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                0.05,
                1
            ],
            [
                0.3,
                0,
                245,
                ,
                ,
                3,
                2,
                0.3,
                ,
                -0.001,
                ,
                ,
                ,
                ,
                ,
                ,
                0.02,
                ,
                ,
                0.04
            ],
            [
                0.1,
                0,
                245,
                ,
                ,
                2,
                1,
                0
            ],
            [
                ,
                0,
                ,
                ,
                ,
                ,
                4,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                100,
                2
            ], 
        ],
        [
            [
                [
                    ,
                    ,
                    10,
                    ,
                    ,
                    ,
                    17,
                    ,
                    ,
                    ,
                    24,
                    ,
                    ,
                    ,
                    25,
                    ,
                    ,
                    ,
                    24,
                    ,
                    ,
                    ,
                    17,
                    ,
                    ,
                    ,
                    10,
                    ,
                    ,
                    ,
                    17,
                    ,
                    ,
                    ,
                    24,
                    ,
                    ,
                    ,
                    25,
                    ,
                    ,
                    ,
                    24,
                    ,
                    ,
                    ,
                    17,
                    ,
                    ,
                    ,
                    10,
                    ,
                    ,
                    ,
                    17,
                    ,
                    ,
                    ,
                    24,
                    ,
                    ,
                    ,
                    25,
                    ,
                    ,
                    ,
                    24,
                    ,
                    ,
                    ,
                    17,
                    ,
                    ,
                    , 
                ],
                [
                    1,
                    ,
                    22.1,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    , 
                ],
                [
                    2,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    , 
                ], 
            ],
            [
                [
                    ,
                    ,
                    18,
                    ,
                    ,
                    ,
                    22,
                    ,
                    ,
                    ,
                    25,
                    ,
                    ,
                    ,
                    29,
                    ,
                    ,
                    ,
                    25,
                    ,
                    ,
                    ,
                    22,
                    ,
                    ,
                    ,
                    18,
                    ,
                    ,
                    ,
                    22,
                    ,
                    ,
                    ,
                    25,
                    ,
                    ,
                    ,
                    29,
                    ,
                    ,
                    ,
                    25,
                    ,
                    ,
                    ,
                    22,
                    ,
                    ,
                    , 
                ],
                [
                    1,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    , 
                ],
                [
                    2,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    , 
                ], 
            ],
            [
                [
                    ,
                    ,
                    10,
                    ,
                    ,
                    ,
                    17,
                    ,
                    ,
                    ,
                    24,
                    ,
                    ,
                    ,
                    25,
                    ,
                    ,
                    ,
                    24,
                    ,
                    ,
                    ,
                    17,
                    ,
                    ,
                    ,
                    10,
                    ,
                    ,
                    ,
                    17,
                    ,
                    ,
                    ,
                    24,
                    ,
                    ,
                    ,
                    25,
                    ,
                    ,
                    ,
                    24,
                    ,
                    ,
                    ,
                    17,
                    ,
                    ,
                    ,
                    10,
                    ,
                    ,
                    ,
                    17,
                    ,
                    ,
                    ,
                    24,
                    ,
                    ,
                    ,
                    25,
                    ,
                    ,
                    ,
                    24,
                    ,
                    ,
                    ,
                    17,
                    ,
                    ,
                    , 
                ],
                [
                    1,
                    ,
                    25,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    24,
                    ,
                    25,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    29,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    28,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    , 
                ],
                [
                    2,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    , 
                ], 
            ],
            [
                [
                    ,
                    ,
                    18,
                    ,
                    ,
                    ,
                    22,
                    ,
                    ,
                    ,
                    25,
                    ,
                    ,
                    ,
                    29,
                    ,
                    ,
                    ,
                    25,
                    ,
                    ,
                    ,
                    22,
                    ,
                    ,
                    ,
                    18,
                    ,
                    ,
                    ,
                    22,
                    ,
                    ,
                    ,
                    25,
                    ,
                    ,
                    ,
                    29,
                    ,
                    ,
                    ,
                    25,
                    ,
                    ,
                    ,
                    22,
                    ,
                    ,
                    , 
                ],
                [
                    1,
                    ,
                    18,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    17,
                    ,
                    18,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    23,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    , 
                ],
                [
                    2,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    , 
                ], 
            ],
            [
                [
                    ,
                    ,
                    10,
                    ,
                    ,
                    ,
                    17,
                    ,
                    ,
                    ,
                    24,
                    ,
                    ,
                    ,
                    25,
                    ,
                    ,
                    ,
                    24,
                    ,
                    ,
                    ,
                    17,
                    ,
                    ,
                    ,
                    10,
                    ,
                    ,
                    ,
                    17,
                    ,
                    ,
                    ,
                    24,
                    ,
                    ,
                    ,
                    25,
                    ,
                    ,
                    ,
                    24,
                    ,
                    ,
                    ,
                    17,
                    ,
                    ,
                    ,
                    10,
                    ,
                    ,
                    ,
                    17,
                    ,
                    ,
                    ,
                    24,
                    ,
                    ,
                    ,
                    25,
                    ,
                    ,
                    ,
                    24,
                    ,
                    ,
                    ,
                    17,
                    ,
                    ,
                    , 
                ],
                [
                    1,
                    ,
                    22,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    , 
                ],
                [
                    2,
                    ,
                    10.53,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    12.4,
                    ,
                    ,
                    ,
                    13.7,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    20,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    18,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    17,
                    ,
                    ,
                    , 
                ], 
            ],
            [
                [
                    ,
                    ,
                    18,
                    ,
                    ,
                    ,
                    22,
                    ,
                    ,
                    ,
                    25,
                    ,
                    ,
                    ,
                    29,
                    ,
                    ,
                    ,
                    25,
                    ,
                    ,
                    ,
                    22,
                    ,
                    ,
                    ,
                    18,
                    ,
                    ,
                    ,
                    22,
                    ,
                    ,
                    ,
                    25,
                    ,
                    ,
                    ,
                    29,
                    ,
                    ,
                    ,
                    25,
                    ,
                    ,
                    ,
                    22,
                    ,
                    ,
                    , 
                ],
                [
                    1,
                    ,
                    18,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    17,
                    ,
                    18,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    23.1,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    , 
                ],
                [
                    2,
                    ,
                    6,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    -1, 
                ], 
            ], 
        ],
        [
            0,
            1,
            2,
            3,
            4,
            5
        ],
        ,
        {
            title: "",
            instruments: [
                "",
                "",
                "",
                ""
            ],
            patterns: [
                "A1",
                "A2",
                "B1",
                "B2",
                "B3",
                "B4"
            ]
        }, 
    ];
    let mySongData = (0, $6431d64b4099ba76$export$dd97a93ab7d40d61)(...song);
    $7acb7b9615020448$var$myAudioNode = (0, $3cad711e48be59be$export$2e47e8a49fc6e938)(zzfxX, ...mySongData);
    $7acb7b9615020448$var$myAudioNode.loop = true;
    return;
};


const $6924e755d557ba29$export$1e4df30bc68bf0ae = "logoutNear";
const $6924e755d557ba29$export$4490c10e97871703 = "loginNear";
const $6924e755d557ba29$export$e38c5c081baa9867 = "clickHamburger";





let $27dfdb36fbecc914$export$ed6ca6db9a790fef = 0;
let $27dfdb36fbecc914$export$aa4193da0d6bf178 = 0;
const $27dfdb36fbecc914$var$arcadianData = {};
let $27dfdb36fbecc914$var$selectedArcadian = {};
let $27dfdb36fbecc914$export$8c6431eda8a77dd = [];
let $27dfdb36fbecc914$export$9b9135abd24c5c0e = [];
let $27dfdb36fbecc914$export$20398607044f79bf = [];
let $27dfdb36fbecc914$export$5f7ba87a2aa30e36 = false;
const $27dfdb36fbecc914$export$77c1498002b2c1f6 = {};
const $27dfdb36fbecc914$export$a7314b2af37a004d = (width)=>{
    $27dfdb36fbecc914$export$ed6ca6db9a790fef = width;
};
const $27dfdb36fbecc914$export$385286859b685220 = (height)=>{
    $27dfdb36fbecc914$export$aa4193da0d6bf178 = height;
};
const $27dfdb36fbecc914$export$f614cfff0edc0bf1 = ({ id: id , data: data , img: img  })=>{
    $27dfdb36fbecc914$var$arcadianData[id] = {
        data: data,
        img: img
    };
};
const $27dfdb36fbecc914$export$cf1ddcfd2ce7635e = (id)=>{
    $27dfdb36fbecc914$var$selectedArcadian = $27dfdb36fbecc914$var$arcadianData[id];
    (0, $5OpyM$emit)((0, $220bba84f7fe45a2$export$b39240f05624b9dc), {
        img: $27dfdb36fbecc914$var$selectedArcadian.img
    });
};
const $27dfdb36fbecc914$export$91f224a2b7267cd3 = ()=>{
    return $27dfdb36fbecc914$var$selectedArcadian;
};
const $27dfdb36fbecc914$export$b8d8708206291a78 = (tokensForOwner, tokensBySeries, collections)=>{
    $27dfdb36fbecc914$export$9b9135abd24c5c0e = tokensForOwner;
    $27dfdb36fbecc914$export$8c6431eda8a77dd = tokensBySeries;
    $27dfdb36fbecc914$export$20398607044f79bf = collections;
    (0, $5OpyM$emit)((0, $220bba84f7fe45a2$export$807f9aaae0f2b8b2), {
        nftTokensBySeries: $27dfdb36fbecc914$export$8c6431eda8a77dd,
        nftTokensForOwner: $27dfdb36fbecc914$export$9b9135abd24c5c0e,
        nftCollections: $27dfdb36fbecc914$export$20398607044f79bf
    });
};
const $27dfdb36fbecc914$export$c2e4e418317fed82 = ()=>{
    $27dfdb36fbecc914$export$5f7ba87a2aa30e36 = true;
};
const $27dfdb36fbecc914$export$db4a65258d859db9 = (id, data)=>{
    $27dfdb36fbecc914$export$77c1498002b2c1f6[id] = data;
};


const $f3ad94c9f84f4d57$export$3ae43b95187fb561 = ()=>{
// TODO (johnedvard) listen for window resize, debounce, and scale to fit mac height and width whilst keeping aspect ratio
};
const $f3ad94c9f84f4d57$export$591b583d1f2d4154 = (sprite1, sprite2)=>{
    // TODO (johnedvard) also incorporate anchor
    if (!sprite1 || !sprite2) return false;
    return sprite1.x < sprite2.x + sprite2.width && sprite1.x + sprite1.width > sprite2.x && sprite1.y < sprite2.y + sprite2.height && sprite1.height + sprite1.y > sprite2.y;
};
const $f3ad94c9f84f4d57$export$8be39b708f3bcc6c = (p1, p2, p3, p4)=>{
    const d = (p2.x - p1.x) * (p4.y - p3.y) - (p2.y - p1.y) * (p4.x - p3.x);
    if (d === 0) return null; // parallel lines
    const u = ((p3.x - p1.x) * (p4.y - p3.y) - (p3.y - p1.y) * (p4.x - p3.x)) / d;
    const v = ((p3.x - p1.x) * (p2.y - p1.y) - (p3.y - p1.y) * (p2.x - p1.x)) / d;
    if (u < 0.0 || u > 1.0) return null; // intersection point not between p1 and p2
    if (v < 0.0 || v > 1.0) return null; // intersection point not between p3 and p4
    const intersectionX = p1.x + u * (p2.x - p1.x);
    const intersectionY = p1.y + u * (p2.y - p1.y);
    if (Number.isNaN(intersectionX) || Number.isNaN(intersectionY)) return null;
    return (0, $5OpyM$Vector)(intersectionX, intersectionY);
};
const $f3ad94c9f84f4d57$export$be9e2dc60b4d8903 = (seriesId, nftTokensForOwner)=>{
    const token = nftTokensForOwner.find((token)=>token.token_id.split(":")[0] === seriesId);
    return !!token;
};
const $f3ad94c9f84f4d57$export$1b742bf8edcf839a = (tokenSeriesId)=>{
    return (0, $27dfdb36fbecc914$export$77c1498002b2c1f6)[tokenSeriesId];
};
const $f3ad94c9f84f4d57$export$241a8e0b37091f42 = ({ x: x , y: y , scale: scale , imgSrc: imgSrc  })=>{
    return new Promise((resolve)=>{
        const image = new Image();
        image.src = imgSrc;
        image.onload = ()=>{
            const sprite = (0, $5OpyM$Sprite)({
                x: x,
                y: y,
                anchor: {
                    x: 0.5,
                    y: 0.5
                },
                width: 8,
                height: 8,
                image: image,
                scaleX: scale,
                scaleY: scale
            });
            resolve(sprite);
        };
    });
};
const $f3ad94c9f84f4d57$export$2cb99e4be0dc4646 = (url)=>{
    return new Promise((resolve)=>{
        if (window.nearApi) resolve();
        const script = document.createElement("script");
        script.onload = ()=>{
            resolve();
        };
        script.src = url;
        document.head.appendChild(script);
    });
};


let $078af426f2e96514$var$crazyGameSdk;
const $078af426f2e96514$export$3cd976175a924ae4 = ()=>{
    $078af426f2e96514$var$loadCrazyGamesSdk().then(()=>{
    // crazyGameSdk = window.CrazyGames.CrazySDK.getInstance();
    // crazyGameSdk.init();
    // listenForAdEvents();
    // listenForGameEvents();
    });
};
const $078af426f2e96514$var$listenForGameEvents = ()=>{
    (0, $5OpyM$on)((0, $220bba84f7fe45a2$export$e8c65303a1194bed), $078af426f2e96514$var$onLevelComplete);
    (0, $5OpyM$on)((0, $6924e755d557ba29$export$e38c5c081baa9867), $078af426f2e96514$var$onClickHamburger);
    (0, $5OpyM$on)((0, $220bba84f7fe45a2$export$debaf4c17437db2), $078af426f2e96514$var$onLevelStart);
    (0, $5OpyM$on)((0, $220bba84f7fe45a2$export$926b6e2a809d39cd), $078af426f2e96514$var$onLevelStart);
};
const $078af426f2e96514$var$onLevelComplete = ()=>{
    $078af426f2e96514$var$crazyGameplayStop();
};
const $078af426f2e96514$var$onClickHamburger = ()=>{
    $078af426f2e96514$var$crazyGameplayStop();
};
const $078af426f2e96514$var$onLevelStart = ()=>{
    $078af426f2e96514$var$crazyGameplayStart();
};
const $078af426f2e96514$var$crazyGameplayStart = ()=>{
    if (!$078af426f2e96514$var$crazyGameSdk) return;
    $078af426f2e96514$var$crazyGameSdk.gameplayStart();
};
const $078af426f2e96514$var$crazyGameplayStop = ()=>{
    if (!$078af426f2e96514$var$crazyGameSdk) return;
    $078af426f2e96514$var$crazyGameSdk.gameplayStop();
};
const $078af426f2e96514$var$loadCrazyGamesSdk = ()=>{
    return (0, $f3ad94c9f84f4d57$export$2cb99e4be0dc4646)("https://sdk.crazygames.com/crazygames-sdk-v1.js");
};
const $078af426f2e96514$var$startMusic = ()=>{
    if ((0, $7acb7b9615020448$export$5bd2ea603f7bce4d)() && !(0, $7acb7b9615020448$export$d0b7c8c6bd077e5e)()) (0, $7acb7b9615020448$export$20b96bc11c72c2bc)();
};
const $078af426f2e96514$var$stopMusic = ()=>{
    if ((0, $7acb7b9615020448$export$5bd2ea603f7bce4d)() && (0, $7acb7b9615020448$export$d0b7c8c6bd077e5e)()) (0, $7acb7b9615020448$export$bf0aa7ea9e7d070b)();
};
const $078af426f2e96514$var$adStarted = ()=>{
    $078af426f2e96514$var$stopMusic();
};
const $078af426f2e96514$var$adFinished = ()=>{
    $078af426f2e96514$var$startMusic();
    (0, $5OpyM$emit)((0, $220bba84f7fe45a2$export$72e9be3220a7f307), {});
};
const $078af426f2e96514$var$adError = ()=>{
    $078af426f2e96514$var$startMusic();
    (0, $5OpyM$emit)((0, $220bba84f7fe45a2$export$72e9be3220a7f307), {});
};
const $078af426f2e96514$var$listenForAdEvents = ()=>{
    if (!$078af426f2e96514$var$crazyGameSdk) return;
    $078af426f2e96514$var$crazyGameSdk.addEventListener("adStarted", $078af426f2e96514$var$adStarted);
    $078af426f2e96514$var$crazyGameSdk.addEventListener("adFinished", $078af426f2e96514$var$adFinished);
    $078af426f2e96514$var$crazyGameSdk.addEventListener("adError", $078af426f2e96514$var$adError);
};
const $078af426f2e96514$export$e9fa27af63c82f66 = ()=>{
    if (!$078af426f2e96514$var$crazyGameSdk) return;
    $078af426f2e96514$var$crazyGameSdk.happytime();
};
const $078af426f2e96514$export$2f3ec5fcfdc1311d = ()=>{
    if (!$078af426f2e96514$var$crazyGameSdk) return;
    (0, $5OpyM$emit)((0, $220bba84f7fe45a2$export$c082a3872766a1e3), {});
    $078af426f2e96514$var$crazyGameSdk.requestAd("midgame");
};



const $15cdb31d45e77f7d$export$b1e70f45be762f6a = (levelId)=>{
    const hintEl = document.getElementById("hint");
    hintEl.textContent = "";
    switch(levelId){
        case 1:
            hintEl.textContent = 'Reach the goal below. \nCut the rope with "S".';
            break;
        case 2:
            hintEl.textContent = 'Use the arrow keys to move.\n Use "Space" to boost up.';
            break;
        case 3:
            hintEl.textContent = "";
            break;
    }
};






class $8f3d08e3ee6bb7b3$export$462e530a9b3886e4 {
    level;
    scale = 1;
    width = 60;
    height = 32;
    originalRadius = {
        x: 15,
        y: 30
    };
    radiusX = 15;
    radiusY = 30;
    hasWon = false;
    hasVanished = false;
    vanishSpeed = 0.3;
    isVanishihng = false;
    constructor(x, y, { level: level  }){
        this.x = x;
        this.y = y;
        this.level = level;
    }
    update() {
        if (this.hasVanished) return;
        this.checkCollision();
    }
    render(ctx) {
        if (!ctx || this.hasVanished) return;
        ctx.lineWidth = 4;
        ctx.beginPath();
        if (this.hasWon) this.startVanishing();
        // ctx.rect(this.x, this.y, this.width, this.height); // Render collision box
        ctx.ellipse(this.x + this.width / 2, this.y + this.height / 2, this.radiusX, this.radiusY, Math.PI / 2, 0, Math.PI * 2);
        ctx.stroke();
    }
    startVanishing() {
        // XXX Only play goal sound when we start vanishing goal for the first time
        // TODO (johnedvard) emit isvanishing event
        if (!this.isVanishihng) (0, $7acb7b9615020448$export$832e2aec58fb1949)();
        this.isVanishihng = true;
        this.radiusX -= this.vanishSpeed;
        this.radiusY -= this.vanishSpeed * 2;
        if (this.radiusX <= 0) this.radiusX = 0;
        if (this.radiusY <= 0) this.radiusY = 0;
        if (this.radiusX <= 0 && this.radiusY <= 0) {
            this.hasVanished = true;
            (0, $5OpyM$emit)((0, $220bba84f7fe45a2$export$da19d49432696ac7));
        }
    }
    checkCollision() {
        if ((0, $f3ad94c9f84f4d57$export$591b583d1f2d4154)({
            x: this.x,
            y: this.y,
            width: this.width,
            height: this.height
        }, this.level.player.sprite)) {
            if (this.hasWon) return;
            (0, $5OpyM$emit)((0, $220bba84f7fe45a2$export$e8c65303a1194bed));
            this.hasWon = true;
        }
    }
}


var /**
 * p = player
 * r = rope length
 * b = bricks
 * s = saws (shurikens)
 * g = goals
 * h = hearts
 */ $909584d14f81bd41$export$2e2bcd8739ae039 = {
    p: {
        x: 400,
        y: 255
    },
    r: 30,
    s: [],
    b: [
        {
            x: 272,
            y: 220
        },
        {
            x: 303,
            y: 220
        },
        {
            x: 333,
            y: 220
        },
        {
            x: 363,
            y: 220
        },
        {
            x: 393,
            y: 220
        },
        {
            x: 423,
            y: 220
        },
        {
            x: 453,
            y: 220
        },
        {
            x: 483,
            y: 220
        },
        {
            x: 453,
            y: 300
        },
        {
            x: 303,
            y: 300
        }, 
    ],
    g: [
        {
            x: 370,
            y: 600
        }
    ]
};


var $8d0545cef52ce056$export$2e2bcd8739ae039 = {
    p: {
        x: 416,
        y: 255
    },
    r: 30,
    s: [],
    b: [
        {
            x: 400,
            y: 220
        },
        {
            x: 302,
            y: 360
        },
        {
            x: 332,
            y: 360
        },
        {
            x: 462,
            y: 360
        },
        {
            x: 492,
            y: 360
        }, 
    ],
    g: [
        {
            x: 388,
            y: 86
        }
    ]
};


var $43f7e7ef4c6e84fb$export$2e2bcd8739ae039 = {
    p: {
        x: 272,
        y: 255
    },
    r: 30,
    s: [
        {
            x: 464,
            y: 350,
            b: "ew",
            d: 100
        }
    ],
    b: [
        {
            x: 260,
            y: 220
        }
    ],
    g: [
        {
            x: 400,
            y: 600
        }
    ]
};


var $ccb246f88d22d3b6$export$2e2bcd8739ae039 = {
    p: {
        x: 416,
        y: 155
    },
    r: 30,
    s: [
        {
            x: 416,
            y: 374,
            b: "ew",
            d: 70
        },
        {
            x: 346,
            y: 220
        }, 
    ],
    b: [
        {
            x: 400,
            y: 120
        },
        {
            x: 480,
            y: 260
        },
        {
            x: 480,
            y: 290
        },
        {
            x: 480,
            y: 322
        },
        {
            x: 480,
            y: 354
        },
        {
            x: 480,
            y: 384
        },
        {
            x: 480,
            y: 414
        },
        {
            x: 330,
            y: 260
        },
        {
            x: 330,
            y: 290
        },
        {
            x: 330,
            y: 322
        },
        {
            x: 330,
            y: 354
        },
        {
            x: 330,
            y: 384
        },
        {
            x: 330,
            y: 414
        },
        {
            x: 360,
            y: 414
        },
        {
            x: 390,
            y: 414
        },
        {
            x: 420,
            y: 414
        },
        {
            x: 450,
            y: 414
        },
        {
            x: 200,
            y: 630,
            b: "ew",
            d: 70
        }, 
    ],
    g: [
        {
            x: 200,
            y: 690
        }
    ]
};


var $2a7fa36ef5ababe4$export$2e2bcd8739ae039 = {
    p: {
        x: 236,
        y: 308,
        b: "ns",
        d: 200
    },
    r: 33,
    s: [
        {
            x: 400,
            y: 380
        },
        {
            x: 400,
            y: 480
        },
        {
            x: 400,
            y: 580
        }, 
    ],
    b: [
        {
            x: 220,
            y: 275,
            b: "ns",
            d: 200
        }
    ],
    g: [
        {
            x: 660,
            y: 700
        }
    ]
};


var $3536cc67988791aa$export$2e2bcd8739ae039 = {
    p: {
        x: 272,
        y: 255
    },
    r: 30,
    s: [
        {
            x: 300,
            y: 400,
            b: "ew",
            d: 100
        },
        {
            x: 464,
            y: 350,
            b: "ew",
            d: -200
        },
        {
            x: 100,
            y: 450,
            b: "ew",
            d: 100
        }, 
    ],
    b: [
        {
            x: 260,
            y: 220
        },
        {
            x: 460,
            y: 290
        },
        {
            x: 460,
            y: 322
        },
        {
            x: 460,
            y: 354
        }, 
    ],
    g: [
        {
            x: 600,
            y: 700
        }
    ]
};


const $f5be9df90789d990$export$cc32c6afed33d362 = {
    level1: $909584d14f81bd41$export$2e2bcd8739ae039,
    level2: $8d0545cef52ce056$export$2e2bcd8739ae039,
    level3: $43f7e7ef4c6e84fb$export$2e2bcd8739ae039,
    level4: $ccb246f88d22d3b6$export$2e2bcd8739ae039,
    level5: $2a7fa36ef5ababe4$export$2e2bcd8739ae039,
    level6: $3536cc67988791aa$export$2e2bcd8739ae039
};


var $6ed15fca5f847dfd$exports = {};
$6ed15fca5f847dfd$exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAAXNSR0IArs4c6QAAAHdJREFUGJVjZIACRTmF%2FwxI4Or5tYxcwsYMLDDJExfPIMszaOub%2FGdgYGBkxCYJAxb6JhATYBwGBgaGExfPwNkMDAwMTMg66puyMdgErYD7IDQ04%2F%2FL92%2F%2Bv3z%2F5n9oaMZ%2FRTmF%2F9%2FenmVgxOXN%2B48eMDIwMDAAAMOeLaMjDTAmAAAAAElFTkSuQmCC";





async function $578f4c0f65c3653d$export$49cb92ad14c1628f(id) {
    const partsUrl = "https://nftstorage.link/ipfs/bafybeib2ir3zpgd3cmizcv7shekjeftcwq7apjib6i5gz2sjc4vajwtgiy";
    // this is the same url that you get from querying token uri from the contract
    const url = "https://api.arcadians.io/" + id;
    return new Promise((resolve, reject)=>{
        // create a GET request
        var xhr = new XMLHttpRequest();
        xhr.onload = ()=>{
            if (xhr.readyState === xhr.DONE) {
                if (xhr.status !== 200) reject(null);
                let gender = "female";
                var data = JSON.parse(xhr.response);
                const headPart = data.attributes.find((trait)=>trait.trait_type === "Head");
                const genderPart = data.attributes.find((trait)=>trait.trait_type === "Class");
                if (genderPart.value.match("Male")) gender = "male";
                const headUrl = headPart.value.toLowerCase().replaceAll(" ", "-");
                var img = new Image();
                img.src = `${partsUrl}/${gender}/head/${headUrl}.png`;
                img.addEventListener("error", (err)=>{
                    console.log("err", err);
                    reject(null);
                }, false);
                img.addEventListener("load", ()=>{
                    localStorage.setItem("Arcadian #" + id, img);
                    (0, $27dfdb36fbecc914$export$f614cfff0edc0bf1)({
                        id: id,
                        data: data,
                        img: img
                    });
                    resolve({
                        id: id,
                        data: data,
                        img: img
                    });
                }, false);
            }
        };
        xhr.open("GET", url);
        xhr.send();
    });
}
const $578f4c0f65c3653d$export$df3d0a5fe68e8d90 = ()=>{
    return new Promise((resolve)=>{
        const promises = [];
        promises.push($578f4c0f65c3653d$export$49cb92ad14c1628f(92));
        promises.push($578f4c0f65c3653d$export$49cb92ad14c1628f(101));
        promises.push($578f4c0f65c3653d$export$49cb92ad14c1628f(110));
        promises.push($578f4c0f65c3653d$export$49cb92ad14c1628f(104));
        for(let i = 1; i < 22; i++){
            if (i === 2 || i === 13) continue;
            const promise = $578f4c0f65c3653d$export$49cb92ad14c1628f(i);
            promises.push(promise);
        }
        Promise.allSettled(promises).then((res)=>{
            resolve(res);
        });
    });
};





const $0a4c69ff81eafed7$var$CONTARCT_NAME_TESTNET = "paras-token-v2.testnet";
const $0a4c69ff81eafed7$export$44487a86467333c3 = ()=>{
    return {
        networkId: "testnet",
        nodeUrl: "https://rpc.testnet.near.org",
        contractName: $0a4c69ff81eafed7$var$CONTARCT_NAME_TESTNET,
        walletUrl: "https://wallet.testnet.near.org",
        helperUrl: "https://helper.testnet.near.org",
        explorerUrl: "https://explorer.testnet.near.org"
    };
};



const $7dc5a2a2e4667f90$export$3a2cf5c1a74b0c06 = "2036";
const $7dc5a2a2e4667f90$export$5fbba1c96c9d58e = "https://ipfs.fleek.co/ipfs/";
const $7dc5a2a2e4667f90$export$610dfbd5e810b084 = "https://api-v3-marketplace-testnet.paras.id/token-series?collection_id=hang-by-a-thread-by-johnonymtestnet";
class $7dc5a2a2e4667f90$export$577b583f5fd6f24b {
    walletConnection;
    contract;
    accountId;
    userName;
    ready;
    nearConfig = (0, $0a4c69ff81eafed7$export$44487a86467333c3)();
    resolveContract;
    constructor(){
        this.listenForGameEvents();
        this.ready = new Promise((resolve)=>{
            this.resolveContract = resolve;
        });
    }
    isSignedIn() {
        return this && this.walletConnection && this.walletConnection.isSignedIn();
    }
    // Initialize contract & set global variables
    async initContract() {
        // Initialize connection to the NEAR testnet
        const keyStore = new window.nearApi.keyStores.BrowserLocalStorageKeyStore();
        const near = await window.nearApi.connect({
            ...this.nearConfig,
            keyStore: keyStore
        });
        // Initializing Wallet based Account. It can work with NEAR testnet wallet that
        // is hosted at https://wallet.testnet.near.org
        this.walletConnection = new window.nearApi.WalletConnection(near, null);
        // Getting the Account ID. If still unauthorized, it's just empty string
        this.accountId = this.walletConnection.getAccountId();
        // Initializing our contract APIs by contract name and configuration
        this.contract = await new window.nearApi.Contract(this.walletConnection.account(), this.nearConfig.contractName, {
            // View methods are read only. They don't modify the state, but usually return some value.
            viewMethods: [
                "nft_tokens_for_owner",
                "nft_tokens_by_series"
            ],
            // Change methods can modify the state. But you don't receive the returned value when called.
            changeMethods: [
                "nft_buy"
            ]
        });
        this.resolveContract();
        return this.walletConnection;
    }
    logout() {
        this.walletConnection.signOut();
    // reload page
    }
    login() {
        // Allow the current app to make calls to the specified contract on the
        // user's behalf.
        // This works by creating a new access key for the user's account and storing
        // the private key in localStorage.
        this.walletConnection.requestSignIn(this.nearConfig.contractName);
    }
    nft_tokens_for_owner(account_id) {
        return this.contract.nft_tokens_for_owner({
            account_id: account_id
        });
    }
    nft_tokens_by_series(token_series_id) {
        return this.contract.nft_tokens_by_series({
            token_series_id: token_series_id
        });
    }
    nft_buy({ token_series_id: token_series_id , priceInYoctoNear: priceInYoctoNear  }) {
        return this.contract.nft_buy({
            owner_id: this.accountId,
            receiver_id: this.accountId,
            token_series_id: token_series_id
        }, "300000000000000", priceInYoctoNear);
    }
    getNftCollections() {
        return fetch($7dc5a2a2e4667f90$export$610dfbd5e810b084).then((res)=>res.json()).then((res)=>{
            return res.data.results.filter((data)=>data.metadata.copies > 0 && !data.is_non_mintable);
        });
    }
    listenForGameEvents() {
        (0, $5OpyM$on)((0, $220bba84f7fe45a2$export$bea3f4010df47846), ({ token_series_id: token_series_id , priceInYoctoNear: priceInYoctoNear  })=>this.nft_buy({
                token_series_id: token_series_id,
                priceInYoctoNear: priceInYoctoNear
            }));
    }
}








const $190e12b26265fcbc$var$overlayIds = [
    "main",
    "bonus",
    "levels",
    "level-dialog",
    "near-levels",
    "thanks", 
];
const $190e12b26265fcbc$var$numLevels = Object.keys((0, $f5be9df90789d990$export$cc32c6afed33d362)).length;
let $190e12b26265fcbc$var$hasRemovedDisableOnBonusEls = false;
let $190e12b26265fcbc$export$436f07e526c01bfe = true;
const $190e12b26265fcbc$export$22ea07d0c2ddb570 = ()=>{
    $190e12b26265fcbc$var$addButtonListeners();
    $190e12b26265fcbc$var$listenForGameEvents();
    $190e12b26265fcbc$var$listenForUiEvents();
    $190e12b26265fcbc$var$initBonusContent();
    $190e12b26265fcbc$var$focusLevelSelectButton();
};
const $190e12b26265fcbc$var$focusLevelSelectButton = ()=>{
    document.getElementById("select-level-btn").focus();
};
const $190e12b26265fcbc$var$initLevels = ()=>{
    const levelsGridEl = document.getElementById("levels-grid");
    levelsGridEl.innerHTML = "";
    for(let i = 1; i < $190e12b26265fcbc$var$numLevels + 1; i++){
        const levelEl = document.createElement("button");
        levelEl.textContent = i;
        levelEl.classList.add("level-item");
        levelsGridEl.appendChild(levelEl);
    }
};
const $190e12b26265fcbc$var$initNearLevels = ({ nftTokensBySeries: nftTokensBySeries , nftTokensForOwner: nftTokensForOwner , nftCollections: nftCollections ,  })=>{
    const nearLoadingEl = document.getElementById("loading-near-levels");
    if (nearLoadingEl) nearLoadingEl.remove();
    const levelsGridEl = document.getElementById("near-levels-grid");
    nftCollections.forEach((collection)=>{
        (0, $27dfdb36fbecc914$export$db4a65258d859db9)(collection.token_series_id, collection.metadata.description);
        const levelEl = document.createElement("button");
        const imgEl = document.createElement("img");
        const ownsNft = (0, $f3ad94c9f84f4d57$export$be9e2dc60b4d8903)(collection.token_series_id, nftTokensForOwner);
        imgEl.setAttribute("src", (0, $7dc5a2a2e4667f90$export$5fbba1c96c9d58e) + collection.metadata.media);
        levelEl.setAttribute("near", "true");
        if (!ownsNft) levelEl.classList.add("disabled");
        levelEl.setAttribute("token-series-id", collection.token_series_id);
        // TODO (johnedvard) figure out how to use actual prize and pay for storage instead of hardcoding 1N (actual price is 0.5N)
        levelEl.setAttribute("price", "1000000000000000000000000");
        levelEl.textContent = collection.metadata.title;
        levelEl.appendChild(imgEl);
        const mintForPriceEl = document.createElement("span");
        if (!ownsNft) mintForPriceEl.textContent = "Buy level for: " + (collection.price / Math.pow(10, 24)).toFixed(2) + " Ⓝ";
        else mintForPriceEl.textContent = "Click to play level";
        levelEl.appendChild(mintForPriceEl);
        levelEl.classList.add("level-item");
        levelsGridEl.appendChild(levelEl);
    });
};
const $190e12b26265fcbc$var$initBonusContent = ()=>{
    const bonusGridEl = document.getElementById("bonus-grid");
    $190e12b26265fcbc$var$pouplateBonusGrid(bonusGridEl);
    $190e12b26265fcbc$var$listenForBonusGridEvents(bonusGridEl);
};
const $190e12b26265fcbc$var$pouplateBonusGrid = (bonusGridEl)=>{
    const skullImg = new Image();
    skullImg.src = (0, (/*@__PURE__*/$parcel$interopDefault($6ed15fca5f847dfd$exports)));
    (0, $578f4c0f65c3653d$export$df3d0a5fe68e8d90)().then((res)=>{
        for(let i = 0; i < res.length; i++){
            // TODO (johnedvard) add slot for hat that failed to load instead of skipping
            if (res[i].status !== "fulfilled") continue;
            const img = res[i].value.img;
            const bonusEl = document.createElement("canvas");
            bonusEl.setAttribute("height", img.height * 4);
            bonusEl.setAttribute("width", img.width * 4);
            bonusEl.classList.add("bonus-item");
            bonusEl.setAttribute("arcadian", res[i].value.id);
            if (i > 5 && !(0, $27dfdb36fbecc914$export$5f7ba87a2aa30e36)) bonusEl.classList.add("disabled");
            const ctx = bonusEl.getContext("2d");
            ctx.imageSmoothingEnabled = false;
            ctx.scale(8, 8);
            ctx.drawImage(skullImg, img.width / 4 - 4, img.height / 4 - 12);
            ctx.scale(0.5, 0.5);
            ctx.drawImage(img, 0, 0);
            bonusGridEl.appendChild(bonusEl);
        }
    });
};
const $190e12b26265fcbc$var$listenForBonusGridEvents = (bonusGridEl)=>{
    bonusGridEl.addEventListener("click", (e)=>{
        if (e.target.classList.contains("bonus-item")) {
            if (!e.target.classList.contains("disabled")) {
                (0, $27dfdb36fbecc914$export$cf1ddcfd2ce7635e)(e.target.getAttribute("arcadian"));
                $190e12b26265fcbc$export$85f1bfb258290b46("main");
            }
        // TODO (johnedvard) tell player to become a subscriber
        }
    });
};
const $190e12b26265fcbc$var$addButtonListeners = ()=>{
    const containerEl = document.getElementById("wrap");
    containerEl.addEventListener("click", $190e12b26265fcbc$var$onContainerClick);
};
const $190e12b26265fcbc$var$onContainerClick = (e)=>{
    const id = e.target.id;
    const classList = e.target.classList;
    switch(id){
        case "select-level-btn":
            $190e12b26265fcbc$var$initLevels();
            $190e12b26265fcbc$export$85f1bfb258290b46("levels");
            document.getElementsByClassName("level-item")[0].focus();
            break;
        case "bonus-content-btn":
            $190e12b26265fcbc$export$85f1bfb258290b46("bonus");
            break;
        case "hamburger":
            (0, $5OpyM$emit)((0, $6924e755d557ba29$export$e38c5c081baa9867));
            $190e12b26265fcbc$export$85f1bfb258290b46("main");
            break;
        case "near-level-btn":
            $190e12b26265fcbc$export$85f1bfb258290b46("near-levels");
            break;
        case "next-btn":
            $190e12b26265fcbc$export$85f1bfb258290b46();
            (0, $5OpyM$emit)((0, $220bba84f7fe45a2$export$926b6e2a809d39cd));
            break;
        case "replay-btn":
            $190e12b26265fcbc$export$85f1bfb258290b46();
            (0, $5OpyM$emit)((0, $220bba84f7fe45a2$export$7f2929ff5c768762));
            break;
        case "music-btn":
            (0, $5OpyM$emit)((0, $220bba84f7fe45a2$export$221614c934546623));
            break;
    }
    if (classList.contains("bone") || classList.contains("inverse")) {
        $190e12b26265fcbc$export$85f1bfb258290b46("main");
        return;
    }
    const btn = e.target.closest("button");
    if (btn && btn.getAttribute("near")) $190e12b26265fcbc$var$onNearLevelClick(btn);
    else if (btn && btn.classList.contains("level-item")) {
        (0, $078af426f2e96514$export$2f3ec5fcfdc1311d)();
        $190e12b26265fcbc$export$85f1bfb258290b46();
        (0, $5OpyM$emit)((0, $220bba84f7fe45a2$export$debaf4c17437db2), {
            levelId: +btn.textContent
        });
    }
};
const $190e12b26265fcbc$var$onNearLevelClick = (btn)=>{
    if (btn && btn.classList.contains("disabled")) {
        $190e12b26265fcbc$var$showLoading();
        const token_series_id = btn.getAttribute("token-series-id");
        const priceInYoctoNear = btn.getAttribute("price");
        (0, $5OpyM$emit)((0, $220bba84f7fe45a2$export$bea3f4010df47846), {
            token_series_id: token_series_id,
            priceInYoctoNear: priceInYoctoNear
        });
    } else {
        $190e12b26265fcbc$export$85f1bfb258290b46();
        (0, $5OpyM$emit)((0, $220bba84f7fe45a2$export$debaf4c17437db2), {
            levelData: JSON.parse((0, $f3ad94c9f84f4d57$export$1b742bf8edcf839a)(btn.getAttribute("token-series-id")))
        });
    }
};
const $190e12b26265fcbc$export$85f1bfb258290b46 = (id)=>{
    if (!id) $190e12b26265fcbc$export$436f07e526c01bfe = false;
    else $190e12b26265fcbc$export$436f07e526c01bfe = true;
    (0, $5OpyM$emit)((0, $220bba84f7fe45a2$export$928e03e3b19fe4eb), {});
    (0, $15cdb31d45e77f7d$export$b1e70f45be762f6a)(null);
    $190e12b26265fcbc$var$overlayIds.forEach((o)=>{
        const overlayEl = document.getElementById(o);
        if (!overlayEl.classList.contains("hide")) overlayEl.classList.add("hide");
        if (o === id) overlayEl.classList.remove("hide");
    });
};
const $190e12b26265fcbc$var$listenForUiEvents = ()=>{
    (0, $5OpyM$on)((0, $6924e755d557ba29$export$4490c10e97871703), $190e12b26265fcbc$var$onNearLogin);
    (0, $5OpyM$on)((0, $6924e755d557ba29$export$1e4df30bc68bf0ae), $190e12b26265fcbc$var$onNearLogout);
};
const $190e12b26265fcbc$var$onNearLogin = ()=>{
    $190e12b26265fcbc$var$showLoading();
};
const $190e12b26265fcbc$var$onNearLogout = ()=>{
    const nearLevelBtnEl = document.getElementById("near-level-btn");
    nearLevelBtnEl.classList.add("disabled");
    nearLevelBtnEl.setAttribute("disabled", "true");
};
const $190e12b26265fcbc$var$listenForGameEvents = ()=>{
    (0, $5OpyM$on)((0, $220bba84f7fe45a2$export$da19d49432696ac7), $190e12b26265fcbc$var$onLevelComplete);
    (0, $5OpyM$on)((0, $220bba84f7fe45a2$export$807f9aaae0f2b8b2), $190e12b26265fcbc$var$onNearTokensAdded);
    (0, $5OpyM$on)((0, $220bba84f7fe45a2$export$2a6caf3f9472a7c1), $190e12b26265fcbc$var$onMonetizationProgress);
    (0, $5OpyM$on)((0, $220bba84f7fe45a2$export$221614c934546623), $190e12b26265fcbc$var$onToggleMusic);
};
const $190e12b26265fcbc$var$onToggleMusic = ()=>{
    const musicBtnEl = document.getElementById("music-btn");
    musicBtnEl.textContent = (0, $7acb7b9615020448$export$d0b7c8c6bd077e5e)() ? "Music is ON" : "Music is OFF";
};
const $190e12b26265fcbc$var$onLevelComplete = ()=>{
    $190e12b26265fcbc$export$85f1bfb258290b46("level-dialog");
    document.getElementById("next-btn").focus();
};
const $190e12b26265fcbc$var$onNearTokensAdded = ({ nftTokensBySeries: nftTokensBySeries , nftTokensForOwner: nftTokensForOwner , nftCollections: nftCollections ,  })=>{
    $190e12b26265fcbc$var$initNearLevels({
        nftTokensBySeries: nftTokensBySeries,
        nftTokensForOwner: nftTokensForOwner,
        nftCollections: nftCollections
    });
};
const $190e12b26265fcbc$var$onMonetizationProgress = ()=>{
    if ($190e12b26265fcbc$var$hasRemovedDisableOnBonusEls) return;
    const coilSubEl = document.getElementById("coil-subscriber");
    const coilBtnEl = document.getElementById("coil-btn");
    if (coilBtnEl) coilBtnEl.remove();
    if (coilSubEl) coilSubEl.classList.remove("hide");
    const bonusItemEls = document.getElementsByClassName("bonus-item");
    for (let item of bonusItemEls)item.classList.remove("disabled");
    if (bonusItemEls && bonusItemEls.length) $190e12b26265fcbc$var$hasRemovedDisableOnBonusEls = true;
};
const $190e12b26265fcbc$var$showLoading = ()=>{
    const loadingWrapper = document.getElementById("loading-wrapper");
    loadingWrapper.classList.remove("hide");
};


var $f17a30b862743330$exports = {};
$f17a30b862743330$exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAAXNSR0IArs4c6QAAAHdJREFUGJVjZIACRTmF%2FwxI4Or5tYxcwsYMLDDJExfPIMszaOub%2FGdgYGBkxCYJAxb6JhATYBwGBgaGExfPwNkMDAwMTMg66puyMdgErYD7IDQ04%2F%2FL92%2F%2Bv3z%2F5n9oaMZ%2FRTmF%2F9%2FenmVgxOXN%2B48eMDIwMDAAAMOeLaMjDTAmAAAAAElFTkSuQmCC";






class $98d8ec8444b589f9$export$9321f2857d565ee6 {
    player;
    constructor(player){
        this.player = player;
        this.initControls();
    }
    updateControls() {
        if (this.player.hasWon || this.player.isRopeCut || this.player.rope.length <= 0) return;
        // TODO (johnedvard) add support for touch gesture and gamepad (if enough space)
        if ((0, $5OpyM$keyPressed)("arrowleft") || (0, $5OpyM$keyPressed)("a") || (0, $5OpyM$gamepadPressed)("dpadleft")) {
            this.player.applyForce(-1.5, -1);
            this.player.changePlayerDirection(true);
        }
        if ((0, $5OpyM$keyPressed)("arrowright") || (0, $5OpyM$keyPressed)("d") || (0, $5OpyM$gamepadPressed)("dpadright")) {
            this.player.applyForce(1.5, -1);
            this.player.changePlayerDirection(false);
        }
        if ((0, $5OpyM$keyPressed)("space") || (0, $5OpyM$gamepadPressed)("south")) this.player.applyForce(0, -5);
    }
    cutRope = ()=>{
        this.player.rope.cutRope(Math.floor(this.player.rope.length / 2));
    };
    initControls() {
        (0, $5OpyM$onInput)([
            "s"
        ], this.cutRope);
        (0, $5OpyM$onGamepad)("west", this.cutRope);
        (0, $5OpyM$onInput)([
            "z"
        ], this.restartLevel);
    }
    restartLevel = ()=>{
        (0, $5OpyM$emit)((0, $220bba84f7fe45a2$export$7f2929ff5c768762));
    };
    destroy = ()=>{
        (0, $5OpyM$offInput)([
            "s"
        ], this.cutRope);
        (0, $5OpyM$offGamepad)("west", this.cutRope);
        (0, $5OpyM$offInput)([
            "z"
        ], this.restartLevel);
    };
}


const $8618afcb3bea0caa$export$bfb00cec0048377d = 9;
const $8618afcb3bea0caa$export$7518557b08461305 = "#211e20";
const $8618afcb3bea0caa$export$1822a491f47220d5 = "#555568";
const $8618afcb3bea0caa$export$260153f8e11f88ff = "#a0a08b";
const $8618afcb3bea0caa$export$b2852df373454f50 = "#e9efec";
const $8618afcb3bea0caa$export$10a7cd979be5d336 = "#e20fa0";
const $8618afcb3bea0caa$export$b2a0ce950633e45d = 7;









class $1d6abe9333191400$export$f852485e74e4a8a3 {
    n1;
    n2;
    restingDistance = (0, $8618afcb3bea0caa$export$b2a0ce950633e45d);
    constructor(n1, n2){
        this.n1 = n1;
        this.n2 = n2;
    }
}



class $2df8d244de1e7b26$export$1074d82755dac1c3 {
    pos;
    oldPos;
    width = 2;
    height = 2;
    mass = 0.03;
    constructor({ x: x , y: y  }){
        this.pos = (0, $5OpyM$Vector)(x, y);
        this.oldPos = (0, $5OpyM$Vector)(x, y);
    }
    get x() {
        return this.pos.x;
    }
    get y() {
        return this.pos.y;
    }
    applyForce(fX, fY) {
        this.pos.x += fX;
        this.pos.y += fY;
    }
}



class $54e263a40137436a$export$12b0481742d393df {
    nodes = [];
    links = [];
    anchor;
    iterations = 20;
    constructor({ x: x , y: y , numNodes: numNodes , level: level  }){
        this.level = level;
        this.anchor = (0, $5OpyM$Vector)(x, y);
        for(let i = 0; i < numNodes; i++)this.nodes.push(new (0, $2df8d244de1e7b26$export$1074d82755dac1c3)({
            x: x,
            y: i * (0, $8618afcb3bea0caa$export$b2a0ce950633e45d) + y
        }));
        for(let i1 = 0; i1 < this.nodes.length - 1; i1++){
            const n1 = this.nodes[i1];
            const n2 = this.nodes[i1 + 1];
            this.links.push(new (0, $1d6abe9333191400$export$f852485e74e4a8a3)(n1, n2));
        }
    }
    update() {
        this.updateNodes();
        for(let i = 0; i < this.iterations; i++){
            // Add more iterations to make the rope more stiff
            this.updateLinks();
            this.constrainNodes();
        }
    }
    render(ctx) {
        if (!ctx) return;
        this.renderRope(ctx);
    }
    updateNodes() {
        this.nodes.forEach((n)=>{
            if (n === this.nodes[0]) n.pos = this.anchor;
            const vxy = n.pos.subtract(n.oldPos);
            n.oldPos = n.pos;
            n.pos = n.pos.add(vxy).add((0, $5OpyM$Vector)(0, (0, $8618afcb3bea0caa$export$bfb00cec0048377d) * n.mass));
        });
    }
    constrainNodes() {
        this.nodes.forEach((n)=>{
            if (n === this.nodes[0]) n.pos = this.anchor;
            this.handleWallCollision(n);
            this.handleBoxCollision(n);
        });
    }
    updateLinks() {
        this.links.forEach((l)=>{
            const dxy = l.n2.pos.subtract(l.n1.pos);
            const distance = dxy.length();
            const diff = l.restingDistance - distance;
            const percent = diff / distance / 2;
            const offset = (0, $5OpyM$Vector)(dxy.x * percent, dxy.y * percent);
            l.n1.pos = l.n1.pos.subtract(offset);
            l.n2.pos = l.n2.pos.add(offset);
        });
    }
    renderRope(ctx) {
        ctx.lineWidth = 4;
        ctx.strokeStyle = (0, $8618afcb3bea0caa$export$b2852df373454f50);
        ctx.beginPath();
        this.links.forEach((l)=>{
            ctx.moveTo(l.n1.x, l.n1.y);
            ctx.lineTo(l.n2.x, l.n2.y);
        });
        ctx.stroke();
    }
    handleWallCollision(node) {
        if (node.x > (0, $27dfdb36fbecc914$export$ed6ca6db9a790fef)) node.pos.x = (0, $27dfdb36fbecc914$export$ed6ca6db9a790fef);
        if (node.x < 0) node.pos.x = 0;
        if (node.y > (0, $27dfdb36fbecc914$export$aa4193da0d6bf178)) node.pos.y = (0, $27dfdb36fbecc914$export$aa4193da0d6bf178);
        if (node.y < 0) node.pos.y = 0;
    }
    handleBoxCollision(node, vxy) {
        if (node === this.nodes[0]) return;
        const bricks = this.level.bricks;
        bricks.forEach((b)=>{
            // check left edge
            if ((0, $f3ad94c9f84f4d57$export$591b583d1f2d4154)(b, node)) {
                const left = Math.abs(node.pos.x - b.x);
                const right = Math.abs(node.pos.x - (b.x + b.width));
                const top = Math.abs(node.pos.y - b.y);
                const bot = Math.abs(node.pos.y - (b.y + b.height));
                // hhit left wall
                const max = Math.max(left, right, top, bot);
                if (max === right) node.pos.x = b.x - 3;
                else if (max === left) node.pos.x = b.x + b.width + 3;
                else if (max === bot) node.pos.y = b.y - 3;
                else if (max === top) node.pos.y = b.y + b.height + 3;
            }
        });
    }
    cutRope(index) {
        if (index >= this.nodes.length - 1) index = this.nodes.length - 2; // Make sure we can cut the rope if we pass the wrong index
        this.links.splice(index, 1);
        (0, $7acb7b9615020448$export$7f27a169e6c9ae3)();
        (0, $5OpyM$emit)((0, $220bba84f7fe45a2$export$477b7c468f24ebf0), {
            rope: this
        });
    }
    get length() {
        return this.nodes.length;
    }
    get endNode() {
        return this.nodes[this.nodes.length - 1];
    }
    get anchorNode() {
        if (!this.nodes.length) return {};
        return this.nodes[0];
    }
}








class $93797009d18e32df$export$ba53e5e9c373a6bb {
    timeBetweenBubbles = 10;
    timeSinceLastBubble = 10;
    timeSinceLastBoostBubble = 10;
    constructor(){
        this.pool = (0, $5OpyM$Pool)({
            // TODO (johnedvard) Figure out how to use custom object instead
            create: (0, $5OpyM$Sprite),
            maxSize: 20
        });
    }
    render() {
        this.pool.render();
    }
    update() {
        this.timeSinceLastBubble += 1;
        this.timeSinceLastBoostBubble += 5;
        this.pool.update();
    }
    addBubbles({ x: x , y: y , isBoost: isBoost  }) {
        if (!isBoost && this.timeSinceLastBubble <= this.timeBetweenBubbles) return;
        if (isBoost && this.timeSinceLastBoostBubble <= this.timeBetweenBubbles) return;
        (0, $7acb7b9615020448$export$3ecb8e4d1ea6b1d1)();
        this.timeSinceLastBubble = 0;
        this.timeSinceLastBoostBubble = 0;
        this.pool.get({
            // XXX (johnedvard) I don't know why, but we need to divide by 2. Must be some scaling issues
            x: x / 2,
            y: y / 2,
            width: 20,
            height: 40,
            color: (0, $8618afcb3bea0caa$export$b2852df373454f50),
            ttl: 50,
            render: function() {
                let size = 8;
                if (isBoost) size = 4;
                const ctx = this.context;
                ctx.lineWidth = 2;
                ctx.globalAlpha = this.ttl / 60;
                ctx.strokeStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, size, 0, 2 * Math.PI);
                ctx.stroke();
            },
            update: function(dt) {
                this.ttl -= 1;
                this.x += Math.random() > 0.5 ? 1 : -1;
                this.y -= 1;
                if (isBoost && this.ttl > 30) this.y += 2;
                else if (isBoost) this.y += 1.5;
            }
        });
    }
}


const $7fb4dd1f0f9c4c67$export$e4d313d57a9c102e = "d";
const $7fb4dd1f0f9c4c67$export$592de7cd70aa1113 = "a";


class $afefff5fb252c601$export$2616165974278734 {
    game;
    rope = [];
    playerControls;
    scale = 4;
    sprite = {
        render: ()=>{},
        x: 0,
        y: 0
    };
    headSprite = {
        render: ()=>{},
        x: 0,
        y: 0
    };
    hasWon = false;
    hasSetListeners = false;
    headImg;
    headOffset = {
        x: 10,
        y: 38
    };
    isLeft = false;
    isRopeCut = false;
    anchorNodeSpeed = 1;
    anchorNodeDirection;
    anchorNodeOrgPos;
    particleEffect;
    deadTimer = 0;
    deadInAirTimer = 0;
    deadLimit = 50;
    deadInAirLimit = 250;
    playerState = (0, $7fb4dd1f0f9c4c67$export$592de7cd70aa1113);
    constructor({ game: game , levelData: levelData  }){
        levelData.p = levelData.p || {};
        this.levelData = levelData;
        this.anchorNodeDirection = (0, $b821213835d3b8e1$export$fcce7887255d1c69)(levelData.p.b, levelData.p.d);
        this.distance = Math.abs(levelData.p.d);
        this.behavior = levelData.p.b;
        this.game = game;
        const ropeLength = levelData.r;
        const startX = levelData.p.x;
        const startY = levelData.p.y;
        this.anchorNodeOrgPos = (0, $5OpyM$Vector)(startX, startY);
        this.headImg = (0, $27dfdb36fbecc914$export$91f224a2b7267cd3)().img || {
            width: 0,
            height: 0
        };
        this.createRope({
            startX: startX,
            startY: startY,
            ropeLength: ropeLength,
            levelData: levelData
        });
        (0, $f3ad94c9f84f4d57$export$241a8e0b37091f42)({
            x: startX,
            y: startY,
            scale: this.scale,
            imgSrc: (0, (/*@__PURE__*/$parcel$interopDefault($f17a30b862743330$exports)))
        }).then((sprite)=>this.sprite = sprite);
        this.createHeadSprite(this.headImg);
        this.playerControls = new (0, $98d8ec8444b589f9$export$9321f2857d565ee6)(this);
        this.listenForGameEvents();
        this.particleEffect = new (0, $93797009d18e32df$export$ba53e5e9c373a6bb)();
    }
    updateRope() {
        if (this.hasWon) return;
        this.rope.update();
    }
    renderRope(ctx) {
        if (this.hasWon) return;
        this.rope.render(ctx);
    }
    createHeadSprite(img) {
        if (!img.width || !img.height) return;
        const scale = this.scale / 2;
        let scaleX = scale;
        if (this.isLeft) scaleX = scaleX * -1;
        this.headSprite = (0, $5OpyM$Sprite)({
            x: this.rope.endNode.x - img.width,
            y: this.rope.endNode.y - img.height,
            anchor: {
                x: 0.5,
                y: 0.5
            },
            width: 8,
            height: 8,
            image: img,
            scaleX: scaleX,
            scaleY: scale
        });
    }
    createRope({ startX: startX , startY: startY , ropeLength: ropeLength  }) {
        this.rope = new (0, $54e263a40137436a$export$12b0481742d393df)({
            x: startX,
            y: startY,
            numNodes: ropeLength,
            level: this.game.level
        });
        this.isRopeCut = false;
    }
    renderPlayer(_ctx) {
        this.sprite.render();
        this.headSprite.render();
    }
    applyForce(fX, fY) {
        // TODO (johnedvard) use a constant to make it more obvious and less prone to bug
        const isBoost = fY < -4;
        this.particleEffect.addBubbles({
            x: this.sprite.x,
            y: this.sprite.y,
            isBoost: isBoost
        });
        this.rope.endNode.applyForce(fX, fY);
    }
    changePlayerDirection(isLeft) {
        this.isLeft = isLeft;
        if (isLeft) {
            this.sprite.scaleX = -this.scale;
            this.headSprite.scaleX = -this.scale / 2;
        } else {
            this.sprite.scaleX = this.scale;
            this.headSprite.scaleX = this.scale / 2;
        }
        // prevent headpiece from flashing
        this.headSprite.x = this.sprite.x - (this.headImg.width - this.headOffset.x) * Math.sign(this.sprite.scaleX);
    }
    render(ctx) {
        this.renderRope(ctx);
        this.renderPlayer(ctx);
        this.particleEffect.render(ctx);
    // this.renderCollisionBox(ctx);
    }
    renderCollisionBox(ctx) {
        ctx.lineWidth = 4;
        ctx.strokeStyle = (0, $8618afcb3bea0caa$export$b2852df373454f50);
        ctx.beginPath();
        ctx.rect(this.sprite.x, this.sprite.y, this.sprite.width * this.scale, this.sprite.height * this.scale);
        ctx.stroke();
    }
    update() {
        this.sprite.x = this.rope.endNode.pos.x;
        this.sprite.y = this.rope.endNode.pos.y;
        this.headSprite.x = this.rope.endNode.pos.x - (this.headImg.width - this.headOffset.x) * Math.sign(this.sprite.scaleX);
        this.headSprite.y = this.rope.endNode.pos.y - this.headImg.height + +this.headOffset.y;
        this.particleEffect.update();
        this.updateRope();
        this.updateAnchorNode();
        this.handlePlayerState();
        this.playerControls.updateControls();
    }
    handlePlayerState() {
        this.handleDeadOnGround();
        this.handleDeadInAir();
    }
    handleDeadOnGround() {
        if (this.playerState === (0, $7fb4dd1f0f9c4c67$export$e4d313d57a9c102e)) return;
        if (this.sprite.y >= (0, $27dfdb36fbecc914$export$aa4193da0d6bf178)) {
            this.deadTimer += 1;
            if (this.deadTimer >= this.deadLimit) this.handleDied();
        }
    }
    handleDeadInAir() {
        if (this.hasWon) return;
        if (!this.isRopeCut || this.playerState === (0, $7fb4dd1f0f9c4c67$export$e4d313d57a9c102e)) return;
        this.deadInAirTimer += 1;
        if (this.deadInAirTimer >= this.deadInAirLimit) this.handleDied();
    }
    handleDied() {
        this.deadTimer = 0;
        this.deadInAirTimer = 0;
        this.playerState = (0, $7fb4dd1f0f9c4c67$export$e4d313d57a9c102e);
        (0, $5OpyM$emit)((0, $220bba84f7fe45a2$export$4894a45bbf13eea7), {});
    }
    updateAnchorNode() {
        const anchorNode = this.rope.anchorNode;
        const { axis: axis , newDirection: newDirection , smoothSpeed: smoothSpeed  } = (0, $b821213835d3b8e1$export$e0a22ef603f98592)({
            behavior: this.behavior,
            distance: this.distance,
            direction: this.anchorNodeDirection,
            x: anchorNode.pos.x,
            y: anchorNode.pos.y,
            orgX: this.anchorNodeOrgPos.x,
            orgY: this.anchorNodeOrgPos.y
        });
        this.anchorNodeDirection = newDirection;
        anchorNode.pos[axis] += this.anchorNodeSpeed * smoothSpeed[axis];
    }
    reArrangeRope() {
        this.rope.splice(this.rope.length - 2, 1);
        const newLastPointWithLink = this.rope[this.rope.length - 2];
        // undefined if last link was romved
        if (newLastPointWithLink) {
            newLastPointWithLink.removeLink();
            newLastPointWithLink.attachTo(this.pointMass);
        }
    }
    respawnPlayer() {
        const ropeLength = this.levelData.r;
        const startX = this.levelData.p.x;
        const startY = this.levelData.p.y;
        this.anchorNodeDirection = (0, $b821213835d3b8e1$export$fcce7887255d1c69)(this.levelData.p.b, this.levelData.p.d);
        this.createRope({
            startX: startX,
            startY: startY,
            ropeLength: ropeLength,
            levelData: this.levelData
        });
        this.playerState = (0, $7fb4dd1f0f9c4c67$export$592de7cd70aa1113);
    }
    listenForGameEvents() {
        if (this.hasSetListeners) return;
        (0, $5OpyM$on)((0, $220bba84f7fe45a2$export$e8c65303a1194bed), this.onGoalCollision);
        (0, $5OpyM$on)((0, $220bba84f7fe45a2$export$b39240f05624b9dc), this.onArcadianAdded);
        (0, $5OpyM$on)((0, $220bba84f7fe45a2$export$477b7c468f24ebf0), this.onCutRope);
        this.hasSetListeners = true;
    }
    onGoalCollision = ()=>{
        this.hasWon = true;
    };
    onArcadianAdded = ({ img: img  })=>{
        this.headImg = img;
        this.createHeadSprite(img);
    };
    onCutRope = ({ rope: rope  })=>{
        this.isRopeCut = true;
    };
    destroy = ()=>{
        if (this.playerControls) this.playerControls.destroy();
        (0, $5OpyM$off)((0, $220bba84f7fe45a2$export$e8c65303a1194bed), this.onGoalCollision);
        (0, $5OpyM$off)((0, $220bba84f7fe45a2$export$b39240f05624b9dc), this.onArcadianAdded);
        (0, $5OpyM$off)((0, $220bba84f7fe45a2$export$477b7c468f24ebf0), this.onCutRope);
    };
    get currPos() {
        return this.rope.endNode.pos;
    }
    get oldPos() {
        return this.rope.endNode.oldPos;
    }
    set currPos(pos) {
        this.rope.endNode.currPos = pos;
    }
    set oldPos(pos) {
        this.rope.endNode.oldPos = pos;
    }
}


var $d0bac5d362d761fe$exports = {};
$d0bac5d362d761fe$exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAAXNSR0IArs4c6QAAAIlJREFUGJV1j8EJhDAURF%2FsQBC8iWILgi0IOf%2B7RxvYKmwiTQhpIWALyy57CwRSwt%2BTsK44p4F5wzDwo5iTcifnVhVZtGvaE2QOI7KcAmt75vlhCoCjtQfPHjwA2%2FYk5qRFzEmHcbpM7sFTl5Up6rIy1vYADOPEAb8%2Bb3NpdU2rIos6t96%2F%2Bb%2F6Bau%2BMABfAptPAAAAAElFTkSuQmCC";




class $d22b08ea919059cc$export$bb9f836bf27c1ab2 {
    x;
    y;
    orgX;
    orgY;
    sprite = {
        render: ()=>{}
    };
    distance = 100;
    speed = 1;
    scale = 4;
    rotSpeed = 0.2;
    width = 8;
    height = 8;
    level;
    constructor(x, y, { behavior: behavior , distance: distance , level: level  }){
        this.direction = (0, $b821213835d3b8e1$export$fcce7887255d1c69)(behavior, distance);
        this.distance = Math.abs(distance);
        this.behavior = behavior;
        this.x = x;
        this.y = y;
        this.orgX = x;
        this.orgY = y;
        this.level = level;
        (0, $f3ad94c9f84f4d57$export$241a8e0b37091f42)({
            x: this.x,
            y: this.y,
            width: this.width,
            height: this.height,
            scale: this.scale,
            imgSrc: (0, (/*@__PURE__*/$parcel$interopDefault($d0bac5d362d761fe$exports)))
        }).then((sprite)=>this.sprite = sprite);
    }
    update() {
        const { axis: axis , newDirection: newDirection , smoothSpeed: smoothSpeed  } = (0, $b821213835d3b8e1$export$e0a22ef603f98592)({
            behavior: this.behavior,
            distance: this.distance,
            direction: this.direction,
            x: this.x,
            y: this.y,
            orgX: this.orgX,
            orgY: this.orgY
        });
        this.direction = newDirection;
        this[axis] += this.speed * smoothSpeed[axis];
        this.sprite.x = this.x;
        this.sprite.y = this.y;
        this.sprite.rotation += this.rotSpeed;
    }
    render(_ctx) {
        this.sprite.render();
    }
}




class $111c791ca28517c9$export$ca664994d1d54bff {
    player;
    saws = [];
    goals = [];
    bricks = [];
    isLevelLoaded = false;
    isFirstRopeCut = false;
    isStopMotion = false;
    levelId;
    levelData;
    stopMotionTime = 10;
    stopMotionEllapsed = 0;
    constructor({ game: game , levelId: levelId , levelData: levelData  }){
        this.levelId = levelId;
        this.levelData = levelData;
        this.game = game;
        if (levelData) setTimeout(()=>{
            // XXX Using settimout to avoid runtime error for some reason
            this.init(levelData);
        });
        else this.loadLevel("level" + levelId).then((levelData)=>{
            this.init(levelData);
        }).catch(()=>{
            (0, $190e12b26265fcbc$export$85f1bfb258290b46)("thanks");
            (0, $078af426f2e96514$export$e9fa27af63c82f66)();
        // TODO (johnedvard) improve error handling, not always assume last level
        });
        this.listenForGameEvents();
    }
    init(levelData) {
        this.levelData = levelData;
        this.createPlayer(levelData);
        this.createSaws(levelData);
        this.createGoals(levelData);
        this.createBricks(levelData);
        this.isLevelLoaded = true;
        (0, $15cdb31d45e77f7d$export$b1e70f45be762f6a)(this.levelId);
    }
    loadLevel(levelId) {
        return new Promise((resolve, reject)=>{
            if ((0, $f5be9df90789d990$export$cc32c6afed33d362)[levelId] && (0, $f5be9df90789d990$export$cc32c6afed33d362)[levelId].p) {
                const levelData = (0, $f5be9df90789d990$export$cc32c6afed33d362)[levelId];
                resolve(levelData);
            } else reject(null);
        });
    }
    render(ctx) {
        if (!this.isLevelLoaded) return;
        // TODO (johnedvard) Add to same array if pressing for space
        this.saws.forEach((saw)=>{
            saw.render(ctx);
        });
        this.bricks.forEach((brick)=>{
            brick.render(ctx);
        });
        this.player.render(ctx);
        this.goals.forEach((goal)=>{
            goal.render(ctx);
        });
    }
    update(dt) {
        if (!this.isLevelLoaded) return;
        if (this.isStopMotion) {
            this.stopMotionEllapsed += 1;
            if (this.stopMotionEllapsed >= this.stopMotionTime) this.isStopMotion = false;
            return;
        }
        this.checkCollisions();
        this.player.update(dt);
        this.saws.forEach((saw)=>{
            saw.update(dt);
        });
        this.goals.forEach((goal)=>{
            goal.update(dt);
        });
        this.bricks.forEach((brick)=>{
            brick.update(dt);
        });
    }
    createGoals(levelData) {
        levelData.g.forEach((g)=>{
            this.goals.push(new (0, $8f3d08e3ee6bb7b3$export$462e530a9b3886e4)(g.x, g.y, {
                level: this
            }));
        });
    }
    createPlayer(levelData) {
        this.player = new (0, $afefff5fb252c601$export$2616165974278734)({
            levelData: levelData,
            game: this.game
        });
    }
    createSaws(levelData) {
        if (!levelData.s) return;
        levelData.s.forEach((saw)=>{
            // TODO (johnedvard) Add actual saw behaviour
            this.saws.push(new (0, $d22b08ea919059cc$export$bb9f836bf27c1ab2)(saw.x, saw.y, {
                level: this,
                behavior: saw.b,
                distance: saw.d
            }));
        });
    }
    createBricks(levelData) {
        if (!levelData.b) return;
        levelData.b.forEach((brick)=>{
            this.bricks.push(new (0, $f753dceb5995f447$export$d763173d10f54f27)(brick.x, brick.y, {
                behavior: brick.b,
                distance: brick.d,
                level: this
            }));
        });
    }
    listenForGameEvents() {
        (0, $5OpyM$on)((0, $220bba84f7fe45a2$export$4894a45bbf13eea7), this.onPlayerDied);
        (0, $5OpyM$on)((0, $220bba84f7fe45a2$export$da19d49432696ac7), this.onLevelComplete);
        (0, $5OpyM$on)((0, $220bba84f7fe45a2$export$477b7c468f24ebf0), this.onCutRope);
    }
    onCutRope = ({ rope: rope  })=>{
        if (this.isFirstRopeCut) return;
        this.isStopMotion = true;
        this.isFirstRopeCut = true;
        this.flashScreen();
    };
    onLevelComplete = ()=>{};
    flashScreen() {
        const canvasEl = document.getElementById("game-canvas");
        canvasEl.classList.add("flash");
        setTimeout(()=>{
            requestAnimationFrame(()=>{
                canvasEl.classList.remove("flash");
            });
        }, 50);
    }
    onPlayerDied = ({})=>{
        (0, $7acb7b9615020448$export$dfec8206b16feb46)();
        this.isFirstRopeCut = false;
        this.stopMotionEllapsed = 0;
        this.player.respawnPlayer();
        this.resertSaws();
        this.resetBricks();
    };
    resetBricks() {
        this.bricks.length = 0;
        this.createBricks(this.levelData);
    }
    resertSaws() {
        this.saws.length = 0;
        this.createSaws(this.levelData);
    }
    // TODO (johnedvard) Move collisions to own file?
    checkCollisions() {
        const rope = this.player.rope;
        for(let i = 0; i < rope.length - 2; i++)this.saws.forEach((saw)=>{
            if ((0, $f3ad94c9f84f4d57$export$591b583d1f2d4154)(rope.nodes[i], {
                width: saw.width * saw.scale,
                height: saw.height * saw.scale,
                ...saw
            })) this.player.rope.cutRope(i);
        });
    }
    destroy() {
        (0, $5OpyM$off)((0, $220bba84f7fe45a2$export$4894a45bbf13eea7), this.onPlayerDied);
        (0, $5OpyM$off)((0, $220bba84f7fe45a2$export$da19d49432696ac7), this.onLevelComplete);
        (0, $5OpyM$off)((0, $220bba84f7fe45a2$export$477b7c468f24ebf0), this.onCutRope);
        if (this.player) this.player.destroy();
    }
}






class $4a0201df2f87ea05$export$985739bfa5723e08 {
    canvas;
    context;
    player;
    saw;
    level;
    isAdPlaying;
    deathCount;
    setDeathCount;
    constructor({ deathCount: deathCount , setDeathCount: setDeathCount  }){
        this.deathCount = deathCount;
        this.setDeathCount = setDeathCount;
        const game = this;
        let { canvas: canvas , context: context  } = (0, $5OpyM$init)();
        context.textBaseline = "middle";
        context.lineJoin = "round";
        context.lineCap = "round";
        context.imageSmoothingEnabled = false;
        this.canvas = canvas;
        this.context = context;
        (0, $5OpyM$initInput)();
        (0, $27dfdb36fbecc914$export$385286859b685220)(canvas.height);
        (0, $27dfdb36fbecc914$export$a7314b2af37a004d)(canvas.width);
        let loop = (0, $5OpyM$GameLoop)({
            update: function(dt) {
                if (game.isAdPlaying) return;
                if (!game.level) return;
                game.level.update(dt);
            },
            render: function() {
                if (game.isAdPlaying) return;
                if (!game.level) return;
                context.save();
                game.level.render(context);
            }
        });
        loop.start(); // start the game
        this.listenForGameEvents();
    }
    loadLevel({ levelId: levelId , levelData: levelData  }) {
        if (this.level) this.level.destroy();
        if (levelId) this.level = new (0, $111c791ca28517c9$export$ca664994d1d54bff)({
            levelId: levelId,
            game: this
        });
        else if (levelData) this.level = new (0, $111c791ca28517c9$export$ca664994d1d54bff)({
            game: this,
            levelData: levelData
        });
    }
    listenForGameEvents() {
        (0, $5OpyM$on)((0, $220bba84f7fe45a2$export$926b6e2a809d39cd), this.onStartNextLevel);
        (0, $5OpyM$on)((0, $220bba84f7fe45a2$export$debaf4c17437db2), this.onStartLevel);
        (0, $5OpyM$on)((0, $220bba84f7fe45a2$export$7f2929ff5c768762), this.onReStartLevel);
        (0, $5OpyM$on)((0, $220bba84f7fe45a2$export$221614c934546623), this.onToggleMusic);
        (0, $5OpyM$on)((0, $220bba84f7fe45a2$export$928e03e3b19fe4eb), this.onLevelQuit);
        (0, $5OpyM$on)((0, $220bba84f7fe45a2$export$72e9be3220a7f307), this.onAdFinished);
        (0, $5OpyM$on)((0, $220bba84f7fe45a2$export$c082a3872766a1e3), this.onAdPlaying);
        (0, $5OpyM$on)((0, $7fb4dd1f0f9c4c67$export$e4d313d57a9c102e), this.onPlayerDead);
    }
    onPlayerDead = ()=>{
        this.setDeathCount(++this.deathCount);
    };
    onAdPlaying = ()=>{
        this.isAdPlaying = true;
    };
    onAdFinished = ()=>{
        this.isAdPlaying = false;
    };
    onToggleMusic = ()=>{
        (0, $7acb7b9615020448$export$a5f0c5f1e1d664d6)();
    };
    onStartNextLevel = ()=>{
        this.level.destroy();
        if (this.level.levelId) this.loadLevel({
            levelId: this.level.levelId + 1
        });
        else // TODO (johnedvard) figure out a way to go to next level instead of going back to list
        // NEAR level go back to menu
        (0, $190e12b26265fcbc$export$85f1bfb258290b46)("near-levels");
    };
    onStartLevel = ({ levelId: levelId , levelData: levelData  })=>{
        this.loadLevel({
            levelId: levelId,
            levelData: levelData
        });
    };
    onReStartLevel = ()=>{
        this.loadLevel({
            levelId: this.level.levelId,
            levelData: this.level.levelData
        });
    };
    onLevelQuit = ()=>{
        if (this.level) this.level.destroy();
    };
}




const $dca669c0767e0562$export$34ad8dead2699da6 = (loginoutEl, nearConnection)=>{
    if (!nearConnection) return;
    if (nearConnection.walletConnection.isSignedIn()) {
        (0, $5OpyM$emit)((0, $6924e755d557ba29$export$1e4df30bc68bf0ae), {});
        nearConnection.logout();
        loginoutEl.innerHTML = "Login to NEAR";
    } else {
        (0, $5OpyM$emit)((0, $6924e755d557ba29$export$4490c10e97871703), {});
        nearConnection.login();
        loginoutEl.innerHTML = "Logout from NEAR";
    }
};
const $dca669c0767e0562$export$21f41f48e3c93753 = (nearConnection)=>{
    const loginoutEl = document.getElementById("near-login-loading-btn");
    if (nearConnection && nearConnection.isSignedIn()) {
        loginoutEl.innerHTML = "Logout from NEAR";
        const nearLevelBtn = document.getElementById("near-level-btn");
        nearLevelBtn.classList.remove("disabled");
        nearLevelBtn.removeAttribute("disabled");
    } else loginoutEl.innerHTML = "Login to NEAR";
    loginoutEl.addEventListener("click", ()=>{
        $dca669c0767e0562$export$34ad8dead2699da6(loginoutEl, nearConnection);
    });
};








const $692ce3b3480df086$export$8e0648717f2e781f = ()=>{
    if (document && document.monetization) document.monetization.addEventListener("monetizationprogress", (evt)=>$692ce3b3480df086$var$handleSubscription(evt));
    else window.addEventListener("monetizationprogress", (evt)=>$692ce3b3480df086$var$handleSubscription(evt));
};
const $692ce3b3480df086$var$handleSubscription = (evt)=>{
    (0, $27dfdb36fbecc914$export$c2e4e418317fed82)();
    (0, $5OpyM$emit)((0, $220bba84f7fe45a2$export$2a6caf3f9472a7c1), evt);
};






const $5ecbecb36de493ae$export$523687fed842f911 = ()=>{
    (0, $5OpyM$onInput)([
        "w",
        "arrowup"
    ], $5ecbecb36de493ae$var$onNavigateUp);
    (0, $5OpyM$onGamepad)("dpadup", $5ecbecb36de493ae$var$onNavigateUp);
    (0, $5OpyM$onInput)([
        "s",
        "arrowdown"
    ], $5ecbecb36de493ae$var$onNavigateDown);
    (0, $5OpyM$onGamepad)("dpaddown", $5ecbecb36de493ae$var$onNavigateDown);
};
const $5ecbecb36de493ae$export$b1fb4cac938035f7 = ()=>{
    (0, $5OpyM$offInput)([
        "w",
        "arrowup"
    ], $5ecbecb36de493ae$var$onNavigateUp);
    (0, $5OpyM$offGamepad)("dpadup", $5ecbecb36de493ae$var$onNavigateUp);
    (0, $5OpyM$offInput)([
        "s",
        "arrowdown"
    ], $5ecbecb36de493ae$var$onNavigateDown);
    (0, $5OpyM$offGamepad)("dpaddown", $5ecbecb36de493ae$var$onNavigateDown);
};
const $5ecbecb36de493ae$var$navigate = (direction, evt, btn)=>{
    if (!(0, $190e12b26265fcbc$export$436f07e526c01bfe)) return;
    const focusedEl = document.activeElement;
    const nextSiblingEl = focusedEl.nextElementSibling;
    if (nextSiblingEl) nextSiblingEl.focus();
    direction;
};
const $5ecbecb36de493ae$var$onNavigateUp = (evt, btn)=>{
    $5ecbecb36de493ae$var$navigate("up", evt, btn);
};
const $5ecbecb36de493ae$var$onNavigateDown = (evt, btn)=>{
    $5ecbecb36de493ae$var$navigate("down", evt, btn);
};


const $a37e21e51a445407$export$73c66cf4705f3263 = ()=>{};


const $cf838c15c8b009ba$export$2cd8252107eb640b = ({ deathCount: deathCount , setDeathCount: setDeathCount  })=>{
    $cf838c15c8b009ba$var$addStyles();
    new (0, $4a0201df2f87ea05$export$985739bfa5723e08)({
        deathCount: deathCount,
        setDeathCount: setDeathCount
    });
    // TODO (johnedvard) add build flag to prevent adding NEAR if we build for crazy games
    // initNear();
    (0, $a37e21e51a445407$export$73c66cf4705f3263)();
    (0, $190e12b26265fcbc$export$22ea07d0c2ddb570)();
    (0, $5ecbecb36de493ae$export$523687fed842f911)();
    (0, $078af426f2e96514$export$3cd976175a924ae4)();
    (0, $692ce3b3480df086$export$8e0648717f2e781f)();
};
const $cf838c15c8b009ba$var$addStyles = ()=>{
    // inject <style> tag
    let style = document.createElement("style");
    style.textContent = (0, (/*@__PURE__*/$parcel$interopDefault($f7b966ebd58fd322$exports)));
    const headEl = document.getElementsByTagName("head")[0];
    headEl.appendChild(style);
};
const $cf838c15c8b009ba$var$initNear = ()=>{
    $cf838c15c8b009ba$var$loadNearApi().then(()=>{
        const nearConnection = new (0, $7dc5a2a2e4667f90$export$577b583f5fd6f24b)();
        nearConnection.initContract().then(()=>{
            (0, $dca669c0767e0562$export$21f41f48e3c93753)(nearConnection);
            if (!nearConnection.isSignedIn()) return;
            const promises = [
                nearConnection.nft_tokens_for_owner(nearConnection.accountId),
                nearConnection.nft_tokens_by_series((0, $7dc5a2a2e4667f90$export$3a2cf5c1a74b0c06)),
                nearConnection.getNftCollections(), 
            ];
            Promise.all(promises).then(([tokensForOwner, tokensBySeries, collections])=>{
                (0, $27dfdb36fbecc914$export$b8d8708206291a78)(tokensForOwner, tokensBySeries, collections);
            });
        });
    });
};
const $cf838c15c8b009ba$var$loadNearApi = ()=>{
    return (0, $f3ad94c9f84f4d57$export$2cb99e4be0dc4646)("https://js13kgames.com/src/near-api-js.js");
};


export {$cf838c15c8b009ba$export$2cd8252107eb640b as init};
//# sourceMappingURL=game.js.map
