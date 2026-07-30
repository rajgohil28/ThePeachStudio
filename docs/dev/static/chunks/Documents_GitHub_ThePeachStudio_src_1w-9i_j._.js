(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/GitHub/ThePeachStudio/src/utils/paths.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Resolves the path of an asset, prepending the base path if configured (e.g. for GitHub Pages).
 *
 * @param path The absolute path to the asset (e.g. "/images/...").
 * @returns The resolved path with the base path prepended in production.
 */ __turbopack_context__.s([
    "getAssetPath",
    ()=>getAssetPath
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/GitHub/ThePeachStudio/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
function getAssetPath(path) {
    const basePath = ("TURBOPACK compile-time value", "") || "";
    if (basePath && path.startsWith("/")) //TURBOPACK unreachable
    ;
    return path;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/GitHub/ThePeachStudio/src/components/SplashIntro.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "badgeHidden": "SplashIntro-module__ixBXpq__badgeHidden",
  "bgImage": "SplashIntro-module__ixBXpq__bgImage",
  "canvasHidden": "SplashIntro-module__ixBXpq__canvasHidden",
  "centerIcon": "SplashIntro-module__ixBXpq__centerIcon",
  "centerLogo": "SplashIntro-module__ixBXpq__centerLogo",
  "centerWordmark": "SplashIntro-module__ixBXpq__centerWordmark",
  "customCursor": "SplashIntro-module__ixBXpq__customCursor",
  "customCursorActive": "SplashIntro-module__ixBXpq__customCursorActive",
  "desktopOnly": "SplashIntro-module__ixBXpq__desktopOnly",
  "fadeInLogo": "SplashIntro-module__ixBXpq__fadeInLogo",
  "fadeOut": "SplashIntro-module__ixBXpq__fadeOut",
  "fadeOutLogo": "SplashIntro-module__ixBXpq__fadeOutLogo",
  "getStartedBtn": "SplashIntro-module__ixBXpq__getStartedBtn",
  "getStartedContainer": "SplashIntro-module__ixBXpq__getStartedContainer",
  "getStartedVisible": "SplashIntro-module__ixBXpq__getStartedVisible",
  "hoverText": "SplashIntro-module__ixBXpq__hoverText",
  "hoverToUnveil": "SplashIntro-module__ixBXpq__hoverToUnveil",
  "logoIconImg": "SplashIntro-module__ixBXpq__logoIconImg",
  "logoWordmarkImg": "SplashIntro-module__ixBXpq__logoWordmarkImg",
  "mobileOnly": "SplashIntro-module__ixBXpq__mobileOnly",
  "paintCanvas": "SplashIntro-module__ixBXpq__paintCanvas",
  "paintbrushIcon": "SplashIntro-module__ixBXpq__paintbrushIcon",
  "paintbrushImg": "SplashIntro-module__ixBXpq__paintbrushImg",
  "splashScreen": "SplashIntro-module__ixBXpq__splashScreen",
  "subtleZoom": "SplashIntro-module__ixBXpq__subtleZoom",
  "topLeftIcon": "SplashIntro-module__ixBXpq__topLeftIcon",
  "topLeftLogo": "SplashIntro-module__ixBXpq__topLeftLogo",
  "topLeftWordmark": "SplashIntro-module__ixBXpq__topLeftWordmark",
});
}),
"[project]/Documents/GitHub/ThePeachStudio/src/components/SplashIntro.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SplashIntro
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/ThePeachStudio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/ThePeachStudio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/ThePeachStudio/src/utils/paths.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$SplashIntro$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/ThePeachStudio/src/components/SplashIntro.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const SPLASH_IMAGES = [
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/splash/image1.png"),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/splash/image2.png"),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/splash/image3.png"),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/splash/image4.png")
];
const LOGO_ICON_URL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/splash/logo-icon.svg"); // Component 25 (peach icon)
const LOGO_WORDMARK_URL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/splash/logo-wordmark.svg"); // Wordmark (the peach studio.)
const PAINTBRUSH_ICON_URL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/splash/paintbrush-icon.png"); // Paintbrush icon
function SplashIntro({ onGetStarted, isExiting }) {
    _s();
    // Initialize with the first image to allow synchronous rendering (crucial for SSR match and unit tests)
    const [bgImage, setBgImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(SPLASH_IMAGES[0]);
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [cursorPos, setCursorPos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: -100,
        y: -100
    });
    const [isHovering, setIsHovering] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isClicking, setIsClicking] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isFullyRevealed, setIsFullyRevealed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const strokeCountRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const hasInteracted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SplashIntro.useEffect": ()=>{
            let nextIndex = Math.floor(Math.random() * SPLASH_IMAGES.length);
            try {
                // Choose a random splash background image with reload-guarantee on mount
                const prevIndexStr = localStorage.getItem("peach_studio_last_splash_index");
                if (prevIndexStr !== null) {
                    const prevIndex = parseInt(prevIndexStr, 10);
                    if (SPLASH_IMAGES.length > 1) {
                        while(nextIndex === prevIndex){
                            nextIndex = Math.floor(Math.random() * SPLASH_IMAGES.length);
                        }
                    }
                }
                localStorage.setItem("peach_studio_last_splash_index", nextIndex.toString());
            } catch  {
            // Safely default and ignore blocked localStorage access (e.g. private mode, iframe, restricted cookie settings)
            }
            // Defer the state update to satisfy eslint rule against synchronous setStates inside effects
            const timer = setTimeout({
                "SplashIntro.useEffect.timer": ()=>{
                    setBgImage(SPLASH_IMAGES[nextIndex]);
                }
            }["SplashIntro.useEffect.timer"], 0);
            return ({
                "SplashIntro.useEffect": ()=>clearTimeout(timer)
            })["SplashIntro.useEffect"];
        }
    }["SplashIntro.useEffect"], []);
    // Initialize and resize canvas
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SplashIntro.useEffect": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext("2d");
            if (!ctx) return;
            const resizeCanvas = {
                "SplashIntro.useEffect.resizeCanvas": ()=>{
                    // Setup high-DPI scaling if needed, or normal scale for simple eraser paths
                    canvas.width = window.innerWidth;
                    canvas.height = window.innerHeight;
                    // Fill with semi-transparent brand canvas color `rgba(231, 228, 221, 0.98)` for glassy fog effect
                    ctx.fillStyle = "rgba(231, 228, 221, 0.98)";
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                }
            }["SplashIntro.useEffect.resizeCanvas"];
            resizeCanvas();
            window.addEventListener("resize", resizeCanvas);
            return ({
                "SplashIntro.useEffect": ()=>window.removeEventListener("resize", resizeCanvas)
            })["SplashIntro.useEffect"];
        }
    }["SplashIntro.useEffect"], []); // Initialize canvas overlay once on mount
    const checkRevealPercentage = ()=>{
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        try {
            const width = canvas.width;
            const height = canvas.height;
            const step = 25; // Subsample every 25th pixel for extreme performance (under 0.2ms)
            let transparentCount = 0;
            let totalCount = 0;
            const imgData = ctx.getImageData(0, 0, width, height);
            const data = imgData.data;
            for(let y = 0; y < height; y += step){
                for(let x = 0; x < width; x += step){
                    const idx = (y * width + x) * 4;
                    const alpha = data[idx + 3]; // Alpha channel value
                    if (alpha < 128) {
                        transparentCount++;
                    }
                    totalCount++;
                }
            }
            const ratio = transparentCount / totalCount;
            if (ratio >= 0.3) {
                setIsFullyRevealed(true);
            }
        } catch  {
        // Gracefully catch security or JSDOM environment errors
        }
    };
    const revealAt = (x, y)=>{
        if (isFullyRevealed) return;
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        // Erase path via destination-out global composite
        ctx.globalCompositeOperation = "destination-out";
        // Draw a beautiful soft watercolor radial gradient brush
        const brushRadius = 49;
        const gradient = ctx.createRadialGradient(x, y, 10, x, y, brushRadius);
        gradient.addColorStop(0, "rgba(0, 0, 0, 1.0)");
        gradient.addColorStop(0.4, "rgba(0, 0, 0, 0.6)");
        gradient.addColorStop(1, "rgba(0, 0, 0, 0.0)");
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, brushRadius, 0, Math.PI * 2);
        ctx.fill();
        // Check pixel data every 10 strokes to minimize canvas reading overhead
        strokeCountRef.current++;
        if (strokeCountRef.current % 10 === 0) {
            checkRevealPercentage();
        }
    };
    // Auto-arc reveal animation on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SplashIntro.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            let animationFrameId;
            const timeoutId = setTimeout({
                "SplashIntro.useEffect.timeoutId": ()=>{
                    if (hasInteracted.current) return;
                    const cx = window.innerWidth / 2;
                    const cy = window.innerHeight / 2;
                    const radius = Math.min(window.innerWidth * 0.25, window.innerHeight * 0.25);
                    const startAngle = Math.PI * 0.5; // Top Center
                    const endAngle = -Math.PI * 0.5; // Bottom Center
                    const duration = 1500; // Smooth 1.5s sweep
                    const startTime = performance.now();
                    setIsHovering(true);
                    const animateArc = {
                        "SplashIntro.useEffect.timeoutId.animateArc": (now)=>{
                            if (hasInteracted.current) {
                                setIsHovering(false);
                                return;
                            }
                            const elapsed = now - startTime;
                            const progress = Math.min(elapsed / duration, 1);
                            // easeInOutCubic for a very professional and natural paintbrush feel
                            const easeProgress = progress < 0.5 ? 4 * progress * progress * progress : 1 - Math.pow(-2 * progress + 2, 3) / 2;
                            const currentAngle = startAngle - (startAngle - endAngle) * easeProgress;
                            const x = cx + radius * Math.cos(currentAngle);
                            const y = cy - radius * Math.sin(currentAngle);
                            setCursorPos({
                                x,
                                y
                            });
                            revealAt(x, y);
                            if (progress < 1) {
                                animationFrameId = requestAnimationFrame(animateArc);
                            } else {
                                // Completed. Fade out the paintbrush tip after a beautiful 600ms trailing pause
                                setTimeout({
                                    "SplashIntro.useEffect.timeoutId.animateArc": ()=>{
                                        if (!hasInteracted.current) {
                                            setIsHovering(false);
                                        }
                                    }
                                }["SplashIntro.useEffect.timeoutId.animateArc"], 600);
                            }
                        }
                    }["SplashIntro.useEffect.timeoutId.animateArc"];
                    animationFrameId = requestAnimationFrame(animateArc);
                }
            }["SplashIntro.useEffect.timeoutId"], 800); // 800ms elegant breathing space on initial load
            return ({
                "SplashIntro.useEffect": ()=>{
                    clearTimeout(timeoutId);
                    if (animationFrameId) {
                        cancelAnimationFrame(animationFrameId);
                    }
                }
            })["SplashIntro.useEffect"];
        }
    }["SplashIntro.useEffect"], []);
    // Mouse move drawing and cursor tracing
    const handleMouseMove = (e)=>{
        hasInteracted.current = true;
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setCursorPos({
            x: e.clientX,
            y: e.clientY
        });
        setIsHovering(true);
        revealAt(x, y);
    };
    const handleMouseEnter = ()=>{
        setIsHovering(true);
    };
    const handleMouseLeave = ()=>{
        if (!hasInteracted.current) return;
        setIsHovering(false);
    };
    const handleMouseDown = ()=>{
        hasInteracted.current = true;
        setIsClicking(true);
    };
    const handleMouseUp = ()=>{
        setIsClicking(false);
    };
    // Touch device drawing support (mobile layout swipe reveal)
    const handleTouchStart = (e)=>{
        hasInteracted.current = true;
        if (e.touches && e.touches[0]) {
            const touch = e.touches[0];
            const rect = e.currentTarget.getBoundingClientRect();
            const x = touch.clientX - rect.left;
            const y = touch.clientY - rect.top;
            // Paint on initial touch
            revealAt(x, y);
        }
    };
    const handleTouchMove = (e)=>{
        hasInteracted.current = true;
        if (e.touches && e.touches[0]) {
            const touch = e.touches[0];
            const rect = e.currentTarget.getBoundingClientRect();
            const x = touch.clientX - rect.left;
            const y = touch.clientY - rect.top;
            // Paint on touch move
            revealAt(x, y);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$SplashIntro$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].splashScreen} ${isExiting ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$SplashIntro$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fadeOut : ""}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: bgImage,
                alt: "The Peach Studio Background Painting",
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$SplashIntro$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bgImage
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/SplashIntro.tsx",
                lineNumber: 278,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$SplashIntro$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].paintCanvas} ${isFullyRevealed ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$SplashIntro$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].canvasHidden : ""}`,
                onMouseMove: handleMouseMove,
                onMouseEnter: handleMouseEnter,
                onMouseLeave: handleMouseLeave,
                onMouseDown: handleMouseDown,
                onMouseUp: handleMouseUp,
                onTouchStart: handleTouchStart,
                onTouchMove: handleTouchMove
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/SplashIntro.tsx",
                lineNumber: 281,
                columnNumber: 7
            }, this),
            isHovering && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$SplashIntro$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].customCursor} ${isClicking ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$SplashIntro$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].customCursorActive : ""}`,
                style: {
                    left: `${cursorPos.x}px`,
                    top: `${cursorPos.y}px`
                }
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/SplashIntro.tsx",
                lineNumber: 295,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$SplashIntro$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hoverToUnveil} ${isFullyRevealed ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$SplashIntro$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].badgeHidden : ""}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$SplashIntro$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].paintbrushIcon,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: PAINTBRUSH_ICON_URL,
                            alt: "Paintbrush Icon",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$SplashIntro$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].paintbrushImg
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/SplashIntro.tsx",
                            lineNumber: 304,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/SplashIntro.tsx",
                        lineNumber: 303,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$SplashIntro$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hoverText,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$SplashIntro$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].desktopOnly,
                                children: "hover to unveil"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/SplashIntro.tsx",
                                lineNumber: 307,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$SplashIntro$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mobileOnly,
                                children: "scratch to unveil"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/SplashIntro.tsx",
                                lineNumber: 308,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/SplashIntro.tsx",
                        lineNumber: 306,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/SplashIntro.tsx",
                lineNumber: 302,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$SplashIntro$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].centerLogo} ${isFullyRevealed ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$SplashIntro$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fadeOutLogo : ""}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$SplashIntro$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].centerIcon,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: LOGO_ICON_URL,
                            alt: "Peach Icon",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$SplashIntro$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoIconImg
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/SplashIntro.tsx",
                            lineNumber: 315,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/SplashIntro.tsx",
                        lineNumber: 314,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$SplashIntro$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].centerWordmark,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: LOGO_WORDMARK_URL,
                            alt: "the peach studio",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$SplashIntro$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoWordmarkImg
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/SplashIntro.tsx",
                            lineNumber: 318,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/SplashIntro.tsx",
                        lineNumber: 317,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/SplashIntro.tsx",
                lineNumber: 313,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$SplashIntro$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].topLeftLogo} ${isFullyRevealed ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$SplashIntro$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fadeInLogo : ""}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$SplashIntro$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].topLeftIcon,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: LOGO_ICON_URL,
                            alt: "Peach Icon",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$SplashIntro$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoIconImg
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/SplashIntro.tsx",
                            lineNumber: 325,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/SplashIntro.tsx",
                        lineNumber: 324,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$SplashIntro$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].topLeftWordmark,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: LOGO_WORDMARK_URL,
                            alt: "the peach studio",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$SplashIntro$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoWordmarkImg
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/SplashIntro.tsx",
                            lineNumber: 328,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/SplashIntro.tsx",
                        lineNumber: 327,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/SplashIntro.tsx",
                lineNumber: 323,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$SplashIntro$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].getStartedContainer} ${isFullyRevealed ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$SplashIntro$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].getStartedVisible : ""}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$SplashIntro$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].getStartedBtn,
                    onClick: onGetStarted,
                    children: "Get Started"
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/SplashIntro.tsx",
                    lineNumber: 334,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/SplashIntro.tsx",
                lineNumber: 333,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/SplashIntro.tsx",
        lineNumber: 276,
        columnNumber: 5
    }, this);
}
_s(SplashIntro, "gLseFbvWr5rQFMoyaX6h6JkNKr4=");
_c = SplashIntro;
var _c;
__turbopack_context__.k.register(_c, "SplashIntro");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "activeRow": "MainLanding-module__-4B6pq__activeRow",
  "arrowHidden": "MainLanding-module__-4B6pq__arrowHidden",
  "arrowVisible": "MainLanding-module__-4B6pq__arrowVisible",
  "authorBox": "MainLanding-module__-4B6pq__authorBox",
  "authorDivider": "MainLanding-module__-4B6pq__authorDivider",
  "authorName": "MainLanding-module__-4B6pq__authorName",
  "authorRole": "MainLanding-module__-4B6pq__authorRole",
  "boldPeach": "MainLanding-module__-4B6pq__boldPeach",
  "bulletIcon": "MainLanding-module__-4B6pq__bulletIcon",
  "card1": "MainLanding-module__-4B6pq__card1",
  "card2": "MainLanding-module__-4B6pq__card2",
  "card3": "MainLanding-module__-4B6pq__card3",
  "card4": "MainLanding-module__-4B6pq__card4",
  "card5": "MainLanding-module__-4B6pq__card5",
  "card6": "MainLanding-module__-4B6pq__card6",
  "card7": "MainLanding-module__-4B6pq__card7",
  "card8": "MainLanding-module__-4B6pq__card8",
  "cardVisible": "MainLanding-module__-4B6pq__cardVisible",
  "contactCol": "MainLanding-module__-4B6pq__contactCol",
  "contactDetails": "MainLanding-module__-4B6pq__contactDetails",
  "contactHeader": "MainLanding-module__-4B6pq__contactHeader",
  "contactLink": "MainLanding-module__-4B6pq__contactLink",
  "copyrightMark": "MainLanding-module__-4B6pq__copyrightMark",
  "ctaButton": "MainLanding-module__-4B6pq__ctaButton",
  "ctaContainer": "MainLanding-module__-4B6pq__ctaContainer",
  "ctaDescription": "MainLanding-module__-4B6pq__ctaDescription",
  "ctaEmphasis": "MainLanding-module__-4B6pq__ctaEmphasis",
  "ctaSection": "MainLanding-module__-4B6pq__ctaSection",
  "ctaTitle": "MainLanding-module__-4B6pq__ctaTitle",
  "curatedEmphasis": "MainLanding-module__-4B6pq__curatedEmphasis",
  "curatedHeading": "MainLanding-module__-4B6pq__curatedHeading",
  "curatedSection": "MainLanding-module__-4B6pq__curatedSection",
  "disperseGrid": "MainLanding-module__-4B6pq__disperseGrid",
  "floatingGrid": "MainLanding-module__-4B6pq__floatingGrid",
  "footerBgBox": "MainLanding-module__-4B6pq__footerBgBox",
  "footerBgImg": "MainLanding-module__-4B6pq__footerBgImg",
  "footerContainer": "MainLanding-module__-4B6pq__footerContainer",
  "footerLogoRow": "MainLanding-module__-4B6pq__footerLogoRow",
  "footerMainGrid": "MainLanding-module__-4B6pq__footerMainGrid",
  "footerSection": "MainLanding-module__-4B6pq__footerSection",
  "footerWordmark": "MainLanding-module__-4B6pq__footerWordmark",
  "footerWordmarkIcon": "MainLanding-module__-4B6pq__footerWordmarkIcon",
  "headshotContainer": "MainLanding-module__-4B6pq__headshotContainer",
  "headshotImg": "MainLanding-module__-4B6pq__headshotImg",
  "headshotMaitreyee": "MainLanding-module__-4B6pq__headshotMaitreyee",
  "headshotPoorva": "MainLanding-module__-4B6pq__headshotPoorva",
  "heroCore": "MainLanding-module__-4B6pq__heroCore",
  "heroCoreReveal": "MainLanding-module__-4B6pq__heroCoreReveal",
  "heroCoreVisible": "MainLanding-module__-4B6pq__heroCoreVisible",
  "heroHeading": "MainLanding-module__-4B6pq__heroHeading",
  "heroOrnament": "MainLanding-module__-4B6pq__heroOrnament",
  "heroOrnamentRow": "MainLanding-module__-4B6pq__heroOrnamentRow",
  "heroSection": "MainLanding-module__-4B6pq__heroSection",
  "heroWrapper": "MainLanding-module__-4B6pq__heroWrapper",
  "italicPlay": "MainLanding-module__-4B6pq__italicPlay",
  "italicSerif": "MainLanding-module__-4B6pq__italicSerif",
  "landingContainer": "MainLanding-module__-4B6pq__landingContainer",
  "logoAndMark": "MainLanding-module__-4B6pq__logoAndMark",
  "metadataLabelSep": "MainLanding-module__-4B6pq__metadataLabelSep",
  "metadataRow": "MainLanding-module__-4B6pq__metadataRow",
  "offeringsCol": "MainLanding-module__-4B6pq__offeringsCol",
  "offeringsContainer": "MainLanding-module__-4B6pq__offeringsContainer",
  "offeringsEmphasis": "MainLanding-module__-4B6pq__offeringsEmphasis",
  "offeringsHeader": "MainLanding-module__-4B6pq__offeringsHeader",
  "offeringsIcon": "MainLanding-module__-4B6pq__offeringsIcon",
  "offeringsList": "MainLanding-module__-4B6pq__offeringsList",
  "offeringsSection": "MainLanding-module__-4B6pq__offeringsSection",
  "offeringsSubtitle": "MainLanding-module__-4B6pq__offeringsSubtitle",
  "offeringsTitle": "MainLanding-module__-4B6pq__offeringsTitle",
  "offeringsTitleCol": "MainLanding-module__-4B6pq__offeringsTitleCol",
  "peachIcon": "MainLanding-module__-4B6pq__peachIcon",
  "peachWordmark": "MainLanding-module__-4B6pq__peachWordmark",
  "polaroidCard": "MainLanding-module__-4B6pq__polaroidCard",
  "polaroidImg": "MainLanding-module__-4B6pq__polaroidImg",
  "processContainer": "MainLanding-module__-4B6pq__processContainer",
  "processContentBox": "MainLanding-module__-4B6pq__processContentBox",
  "processEmphasis": "MainLanding-module__-4B6pq__processEmphasis",
  "processGrid": "MainLanding-module__-4B6pq__processGrid",
  "processHeader": "MainLanding-module__-4B6pq__processHeader",
  "processNumber": "MainLanding-module__-4B6pq__processNumber",
  "processSection": "MainLanding-module__-4B6pq__processSection",
  "processStep": "MainLanding-module__-4B6pq__processStep",
  "processStepVisible": "MainLanding-module__-4B6pq__processStepVisible",
  "processSubtitle": "MainLanding-module__-4B6pq__processSubtitle",
  "processTitle": "MainLanding-module__-4B6pq__processTitle",
  "profileBio": "MainLanding-module__-4B6pq__profileBio",
  "profileDescription": "MainLanding-module__-4B6pq__profileDescription",
  "profileName": "MainLanding-module__-4B6pq__profileName",
  "profileRole": "MainLanding-module__-4B6pq__profileRole",
  "projectRow": "MainLanding-module__-4B6pq__projectRow",
  "projectRowBg": "MainLanding-module__-4B6pq__projectRowBg",
  "projectRowBgImg": "MainLanding-module__-4B6pq__projectRowBgImg",
  "projectRowInner": "MainLanding-module__-4B6pq__projectRowInner",
  "projectTitle": "MainLanding-module__-4B6pq__projectTitle",
  "projectTitleContainer": "MainLanding-module__-4B6pq__projectTitleContainer",
  "quoteIcon": "MainLanding-module__-4B6pq__quoteIcon",
  "quoteIconBox": "MainLanding-module__-4B6pq__quoteIconBox",
  "quoteText": "MainLanding-module__-4B6pq__quoteText",
  "sectionHeader": "MainLanding-module__-4B6pq__sectionHeader",
  "socialCol": "MainLanding-module__-4B6pq__socialCol",
  "socialIconBg": "MainLanding-module__-4B6pq__socialIconBg",
  "socialIconVec": "MainLanding-module__-4B6pq__socialIconVec",
  "socialIconsRow": "MainLanding-module__-4B6pq__socialIconsRow",
  "socialLink": "MainLanding-module__-4B6pq__socialLink",
  "stackAndScatter": "MainLanding-module__-4B6pq__stackAndScatter",
  "stepDecorIcon": "MainLanding-module__-4B6pq__stepDecorIcon",
  "stepDescription": "MainLanding-module__-4B6pq__stepDescription",
  "stepTitle": "MainLanding-module__-4B6pq__stepTitle",
  "stepTitleRow": "MainLanding-module__-4B6pq__stepTitleRow",
  "teamEmphasis": "MainLanding-module__-4B6pq__teamEmphasis",
  "teamGrid": "MainLanding-module__-4B6pq__teamGrid",
  "teamHeaderRow": "MainLanding-module__-4B6pq__teamHeaderRow",
  "teamProfile": "MainLanding-module__-4B6pq__teamProfile",
  "teamSection": "MainLanding-module__-4B6pq__teamSection",
  "teamSubDesc": "MainLanding-module__-4B6pq__teamSubDesc",
  "teamSubtitle": "MainLanding-module__-4B6pq__teamSubtitle",
  "teamTitle": "MainLanding-module__-4B6pq__teamTitle",
  "teamTitleBox": "MainLanding-module__-4B6pq__teamTitleBox",
  "testimonialCard": "MainLanding-module__-4B6pq__testimonialCard",
  "testimonialsEmphasis": "MainLanding-module__-4B6pq__testimonialsEmphasis",
  "testimonialsGrid": "MainLanding-module__-4B6pq__testimonialsGrid",
  "testimonialsHeader": "MainLanding-module__-4B6pq__testimonialsHeader",
  "testimonialsSection": "MainLanding-module__-4B6pq__testimonialsSection",
  "testimonialsSubtitle": "MainLanding-module__-4B6pq__testimonialsSubtitle",
  "testimonialsTitle": "MainLanding-module__-4B6pq__testimonialsTitle",
  "verticalDivider": "MainLanding-module__-4B6pq__verticalDivider",
  "viewProjectLink": "MainLanding-module__-4B6pq__viewProjectLink",
  "viewProjectLinkVisible": "MainLanding-module__-4B6pq__viewProjectLinkVisible",
  "visionBanner": "MainLanding-module__-4B6pq__visionBanner",
  "visionSection": "MainLanding-module__-4B6pq__visionSection",
  "visionSeparator": "MainLanding-module__-4B6pq__visionSeparator",
  "visionText": "MainLanding-module__-4B6pq__visionText",
  "visionWords": "MainLanding-module__-4B6pq__visionWords",
  "wordmarkCol": "MainLanding-module__-4B6pq__wordmarkCol",
  "worksList": "MainLanding-module__-4B6pq__worksList",
});
}),
"[project]/Documents/GitHub/ThePeachStudio/src/components/ProjectDetail.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "backButton": "ProjectDetail-module__krAfIq__backButton",
  "btsCard": "ProjectDetail-module__krAfIq__btsCard",
  "btsHeading": "ProjectDetail-module__krAfIq__btsHeading",
  "btsImage": "ProjectDetail-module__krAfIq__btsImage",
  "btsSection": "ProjectDetail-module__krAfIq__btsSection",
  "btsTickerContainer": "ProjectDetail-module__krAfIq__btsTickerContainer",
  "btsTickerTrack": "ProjectDetail-module__krAfIq__btsTickerTrack",
  "contentSection": "ProjectDetail-module__krAfIq__contentSection",
  "description": "ProjectDetail-module__krAfIq__description",
  "focusImage": "ProjectDetail-module__krAfIq__focusImage",
  "focusImageContainer": "ProjectDetail-module__krAfIq__focusImageContainer",
  "gridImage": "ProjectDetail-module__krAfIq__gridImage",
  "gridImageContainer": "ProjectDetail-module__krAfIq__gridImageContainer",
  "gridSection": "ProjectDetail-module__krAfIq__gridSection",
  "heroBackground": "ProjectDetail-module__krAfIq__heroBackground",
  "heroContent": "ProjectDetail-module__krAfIq__heroContent",
  "heroOverlay": "ProjectDetail-module__krAfIq__heroOverlay",
  "heroSection": "ProjectDetail-module__krAfIq__heroSection",
  "imageGrid": "ProjectDetail-module__krAfIq__imageGrid",
  "immersiveContainer": "ProjectDetail-module__krAfIq__immersiveContainer",
  "immersiveImage": "ProjectDetail-module__krAfIq__immersiveImage",
  "immersiveSection": "ProjectDetail-module__krAfIq__immersiveSection",
  "leftContent": "ProjectDetail-module__krAfIq__leftContent",
  "projectMain": "ProjectDetail-module__krAfIq__projectMain",
  "projectSubtitle": "ProjectDetail-module__krAfIq__projectSubtitle",
  "projectTitle": "ProjectDetail-module__krAfIq__projectTitle",
  "quote": "ProjectDetail-module__krAfIq__quote",
  "rightContent": "ProjectDetail-module__krAfIq__rightContent",
  "slideInProject": "ProjectDetail-module__krAfIq__slideInProject",
  "specs": "ProjectDetail-module__krAfIq__specs",
  "tickerScroll": "ProjectDetail-module__krAfIq__tickerScroll",
});
}),
"[project]/Documents/GitHub/ThePeachStudio/src/components/ProjectDetail.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectDetail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/ThePeachStudio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/ThePeachStudio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/ThePeachStudio/src/utils/paths.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ProjectDetail$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/ThePeachStudio/src/components/ProjectDetail.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
// Complete 15-project high-fidelity database harvested from Figma
const projectsData = [
    {
        id: "sealink",
        title: "sealink",
        subtitle: "Facebook Office, Mumbai",
        quote: "“The sun above. The ocean below...”",
        description: "Inspired by the Bandra–Worli Sea Link, this mural reimagines the city as a mirage where movement, light, and water converge. The palette draws from Mumbai’s coastal hues, layered with the expressive energy of Van Gogh–like strokes. The moment captured sits at the horizon, where day softens and two powerful forces—the sun and the ocean meet, connected by the bridge between them.",
        dimensions: "8 ft (h) X 23 ft (w)",
        materials: "Acrylic paints, Asian royal water-base paints and threads on wall",
        heroImage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/2712b32e-e4c6-4b8c-97a6-d0b69d4ca284.jpg"),
        focusImage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/c5a3da82-82f5-415a-88f4-b4eaa213b93b.jpg"),
        middleBanner: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/2712b32e-e4c6-4b8c-97a6-d0b69d4ca284.jpg"),
        btsImages: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/728f7ed9-20cf-489d-aa0c-e0d1e00aa74e.jpg"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/ea3ec1ae-21d0-45bb-89b8-da7e419db017.jpg"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/ff51dba6-4caa-4cd8-8682-a03c6293164c.jpg"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/fb7986b6-f743-4e76-a950-32a6aa02fd4d.jpg"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/66325075-34fb-4b57-8d65-f129efa54e75.jpg"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/35f29aa2-3488-442d-ada8-48a9996be399.jpg"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/6e3aee7f-78e3-41d5-a535-cf5ec9bf809c.jpg")
        ]
    },
    {
        id: "soul-of-konkan",
        title: "the soul of konkan",
        subtitle: "The Fern Samali Resort, Dapoli, Series by Marriott",
        quote: "“Where waves meet red earth, Stories take shape”",
        description: "This large-scale reception mural draws inspiration from the soul of Konkan—its lush orchards, abundant coastline, native birds, and iconic tiled roofs. Crafted in layered plywood modules, the grid introduces rhythm and depth, allowing every texture and silhouette to become a fragment of the region's living landscape. It feels timeless, poetic, and architectural—perfect for a hospitality project where the design celebrates the identity of a place.",
        dimensions: "11 ft (h) X 21 ft (w)",
        materials: "Wooden ply of 8mm and 10 mm, acrylic putty, asian royal paints water base and coated with waterproof lotion",
        heroImage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/85a1c9f7-ff88-44c2-a13c-6ecb16e64d45.jpg"),
        focusImage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/07eec494-c213-4b57-bd50-d0de3a932952.jpg"),
        middleBanner: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/2a25f7b3-4d33-479c-baae-4796f951b3b9.jpg"),
        extraGridImages: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/56413af5-6731-43a1-9012-7aa2e7fd1306.jpg"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/85a1c9f7-ff88-44c2-a13c-6ecb16e64d45.jpg")
        ],
        btsImages: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/5212837f-a551-4fcb-bc72-89c77597b4c2.jpg"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/13666dde-97cd-4922-adf4-3af5f4f8c475.jpg"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/912006c7-94dd-44cc-b237-e90f5e8e0c41.jpg"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/ad89f2e5-a7b7-41de-8f64-882173acb379.jpg"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/dc002703-8f5f-40aa-b710-813ba14ad107.jpg"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/f2582039-08fc-4b22-814c-044acdfaebed.jpg"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/ce554a0e-afed-4405-b96f-3e3f9ae490f4.jpg")
        ]
    },
    {
        id: "strategy-meets-space",
        title: "where strategy meets space",
        subtitle: "Oritso Office, Noida",
        quote: "“Built with intention. Experienced with purpose.”",
        description: "Having partnered with Oritso on their branding and website, the brand already felt like an extension of our own team. This space was designed to bring that identity to life—reflecting the culture, inspiring everyday behaviours, and creating an immersive brand experience. From concept-driven digital artworks to bespoke installations, feature walls, and custom-designed elements. Unified through a carefully curated palette, graphics, and spatial concepts, every corner contributes to a cohesive design language—creating an environment that is both functional and deeply connected to the people who inhabit it.",
        dimensions: "Multiple surfaces - covering 3000 sq. ft. area",
        materials: "Canvas Paintings, Various Materials - Vinyl, 3D Acrylic, Chrome, Magnets.",
        heroImage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/38b727cb-7643-4261-aad2-f58cbb9e68ed.jpg"),
        focusImage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/14187cc3-6557-4b8a-8ff7-572960153d43.jpg"),
        middleBanner: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/f6230d06-e794-41a5-8585-81b18eb41b04.jpg"),
        extraGridImages: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/c7e7e78a-7d17-463d-a21f-4be913ee7074.jpg"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/7caa83cd-bf81-4365-a260-defbb16b57c2.jpg"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/580b9a0c-6966-4257-9c80-be64b60e9f79.jpg"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/96efa7d7-d32c-4a28-b914-652d6615e2ca.jpg"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/8002ffd4-431c-4058-bd41-593d08a12db7.jpg"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/3ecc5068-8fc2-4e80-b5f7-2f2480c9f7c9.jpg"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/bc214ae5-2c37-4dfe-8aa6-e54fc806afa4.jpg"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/547fe2f5-4a85-431e-a244-eccf73702ec9.jpg")
        ],
        btsImages: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/d2136d9a-e180-4fc4-8045-4dd814b5cb23.jpg"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/06bc119f-ad37-4d7e-bf61-c02f82ddf47a.jpg"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/547fe2f5-4a85-431e-a244-eccf73702ec9.jpg"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/91651cd6-a6fc-4320-ae7b-f986b724e6d1.jpg")
        ]
    },
    {
        id: "mumbai-in-pixels",
        title: "mumbai in pixels",
        subtitle: "Facebook Office, Mumbai",
        quote: "“A city always live, built one block at a time”",
        description: "A custom LEGO wall installation created for Facebook Live at the Facebook, Mumbai office. Iconic city landmarks—from the Gateway of India to the Bandra Worli Sea Link—are reimagined through playful LEGO forms. Subtle social media emojis echo real-time reactions and engagement, blending Mumbai’s cultural energy with Facebook’s digital language.",
        dimensions: "7.5 ft (h) X 8 ft (w)",
        materials: "Lego pieces on lego plates",
        heroImage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/34d9524a-251f-4d3c-8fe9-6e0beec8a3fb.jpg"),
        focusImage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/e4622e01-cd05-461d-bc1b-527e5418c695.jpg"),
        middleBanner: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/34d9524a-251f-4d3c-8fe9-6e0beec8a3fb.jpg"),
        extraGridImages: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/d4e94ad7-2598-495a-a3a4-167b9fd43240.jpg"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/659596f4-92e4-4c5a-8bbc-f422811be660.jpg"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/7325f113-83fd-4fa5-9c16-e16cc68c76b1.jpg")
        ],
        btsImages: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/f4ab5ab2-c9aa-4657-96df-e543deb9cb48.jpg"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/1806ed41-a34f-4d6f-b161-cc9cefe2a04e.jpg"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/1e728d83-5b1a-492d-84da-77783acda3ca.jpg")
        ]
    },
    {
        id: "elephant-mandala",
        title: "the elephant mandala",
        subtitle: "S'thetic Design Studio",
        quote: "“Symbols of belonging. Stories of togetherness”",
        description: "Inspired by the timeless craft of Kutch, this Lippan artwork celebrates the beauty of earth, mirrors, and light. At its heart, elephants move together in harmony—a symbol of family, unity, and enduring bonds. Sculpted in layers of mud and adorned with hand-cut mirrors, every raised surface captures shifting shadows, allowing the artwork to transform throughout the day as light breathes life into its intricate details.",
        dimensions: "7.5 ft (h) X 7.5 ft (w)",
        materials: "Asian paints - Acrylic putty, Fevicol, Mirrors, Dry putty",
        heroImage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/4deee7b8-3698-4419-90c9-4cc3673be481.jpg"),
        focusImage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/41a66ca4-f2ce-418b-9083-1841e2220411.jpg"),
        middleBanner: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/4deee7b8-3698-4419-90c9-4cc3673be481.jpg"),
        extraGridImages: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/7a258596-8418-4e2b-b7ff-1354a4a31923.jpg"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/7a258596-8418-4e2b-b7ff-1354a4a31923.jpg")
        ],
        btsImages: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/9e410d36-787e-4963-8694-44117858d303.jpg"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/0e771e4a-e785-499b-ac62-29442e97c1e9.jpg"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/d7c57e80-fcfa-4439-a26f-7a528caaaf0a.jpg")
        ]
    },
    {
        id: "palm-arc",
        title: "under the palm arc",
        subtitle: "Muse Lab",
        quote: "“Tropical, but quiet. Nature held at rest.”",
        description: "Designed around the client’s colour palette, this bedroom painting draws from the client’s love for tropical plants and trees. Lush foliage wraps gently around the bed-back, creating an immersive yet restrained tropical narrative. Through controlled tones, layered illustrations, and a focused composition, the artwork balances nature with rest—bringing the essence of the tropics while preserving the calm of a bedroom.",
        dimensions: "7 ft (h) X 10 ft (w)",
        materials: "Asian Royal Paints on wall",
        heroImage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/217fac71-a887-467b-9b01-c37c2b80c61c.jpg"),
        focusImage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/12e0c0f2-b5ae-4e68-87c6-6d3265991014.jpg"),
        middleBanner: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/217fac71-a887-467b-9b01-c37c2b80c61c.jpg"),
        extraGridImages: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/5b218f34-fed6-4a0a-8176-115937397994.jpg"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/1e0b350d-2109-4daa-ace7-cf029ff96b09.jpg"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/c18dcaf6-70d7-4069-8ee5-b2e080fd0def.jpg")
        ],
        btsImages: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/b1dfb16e-7e77-4773-af2f-9537f6c2591d.jpg"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/2ea6da8f-3f4d-41d6-8934-3ba3dd023a3a.jpg"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/dc116394-e276-4aa5-8380-d71166d20aff.jpg"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/86dec7e8-0dcc-4fbc-9625-1d6c93454eb2.jpg"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/ccbc0a4f-75e1-48b5-92bb-6446519085ab.jpg"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/41d14423-7591-4ad0-8a73-2eef8dba2058.jpg"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/ba7b95cf-b3e5-40e0-ad96-c6d340b9abf9.jpg")
        ]
    },
    {
        id: "bloomspace",
        title: "bloomspace",
        subtitle: "ADCPL Firm",
        quote: "“A season in bloom, Held within the pillars.”",
        description: "These artworks are created on architectural pillars featuring an interesting textured surface. As the pillars face a lush green garden, the compositions are inspired by vibrant floral elements. The colourful flower arrangements create a visual dialogue between the built structure and the surrounding landscape, enhancing the connection between interior and exterior spaces.",
        dimensions: "15 ft (h) X 3 ft (w)",
        materials: "Acrylic putty, ply, acrylic colours",
        heroImage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/b332c5e6-7c34-498e-b3d8-09ca0f5b6a25.jpg"),
        focusImage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/6d29a872-497e-4923-85d6-747bdbc278c3.jpg"),
        middleBanner: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/3982e285-83e8-470e-95eb-d03caeca7aee.jpg"),
        extraGridImages: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/647fc052-11c4-457a-8438-bb7168e91204.jpg"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/8bab54a8-0901-4bc6-bbf6-a49e38e73938.jpg"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/f1378af3-0a20-4ef5-ad1f-124e93f8473d.jpg")
        ],
        btsImages: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/4179f470-7250-421b-b9fe-2bee7953c65c.jpg"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/ae79c050-3874-4a4c-bab1-a621c8633cf9.jpg"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/90f4c48d-878c-43ce-a886-391ac23cc3ac.jpg"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/be89b0bb-a5d0-4ab1-af9f-e0a3ff5f09bb.jpg")
        ]
    },
    {
        id: "city-threshold",
        title: "a city of every threshold",
        subtitle: "Capgemini Office, Mumbai",
        quote: "“The spirit of Mumbai, Framed within every doorway”",
        description: "Each conference room door features an illustrated fragment of Mumbai— familiar, local, unmistakable. Drawn in black and white, anchored by Capgemini brand accents, the artwork grounds a global organisation in the city it works from.",
        dimensions: "8 ft (h) X 3 ft (w)",
        materials: "Acrylic paint on wooden doors",
        heroImage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/43dd91de-461d-42b7-bc99-c1446954d767.jpg"),
        focusImage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/79e61ae1-cb9d-4da2-8039-3bcfea6a5ccd.jpg"),
        middleBanner: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/43dd91de-461d-42b7-bc99-c1446954d767.jpg"),
        extraGridImages: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/e0ee2294-63e0-4ea4-856f-08364eb29c87.jpg"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/160cfef8-19c2-44d5-ba56-7f8090a98a23.jpg"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/4dd949a1-3660-454b-b3ce-b94e64f99df3.jpg"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/a2ed97e9-c8eb-4e34-97d6-c2c4b2dbc786.jpg")
        ],
        btsImages: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/ac004bf4-8bd9-4cac-8a33-0ed92bd4d933.jpg"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/56791d41-7d03-45bd-8bdb-6bb4c9daf2ca.jpg"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/b22e46a7-4541-4811-96c6-4bb6b04622f7.jpg"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/761678a0-63ae-4dc3-97c8-7f9e4c62c97a.jpg")
        ]
    },
    {
        id: "birdsong-october",
        title: "birdsong in october",
        subtitle: "Muse Lab",
        quote: "“The song of a bird, Kept inside the room”",
        description: "Inspired by nature, local birds, and floral elements, this master bedroom feature wall painting creates an elegant natural backdrop. The soft textures and hand-painted illustration bring a calm, organic narrative to the space, creating a beautiful natural canvas.",
        dimensions: "9 ft (h) X 12 ft (w)",
        materials: "Asian Royal Paints on wall",
        heroImage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/71c64222-68d3-4f4d-a7f4-a40a45d379de.jpg"),
        focusImage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/3a3be2ef-3193-43de-856c-e4526a98bffe.jpg"),
        middleBanner: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/dca28a98-7825-4932-a609-f970520e2000.jpg"),
        extraGridImages: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/00e168b8-8406-4343-a57e-3bde89976dea.jpg"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/df709332-a06f-44a5-af25-8602708b3be8.jpg"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/8b3e5192-1ed1-4a62-b019-894f97fa2899.jpg"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/b6bcf019-396a-4171-ad4b-26847cbcf903.jpg")
        ],
        btsImages: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/7c583c4d-485a-4a6a-a66e-bcd7cd6695e6.jpg"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/1785ec89-7ff1-40f4-b237-fc0866b953fb.jpg"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/fa98eb84-cdac-47f0-be42-d234cf98a03d.jpg"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/df709332-a06f-44a5-af25-8602708b3be8.jpg")
        ]
    },
    {
        id: "many-stories",
        title: "many stories, one city!",
        subtitle: "Facebook Office, Mumbai",
        quote: "“The city in sketches, Built on the walls of ideas”",
        description: "An artwork for Facebook Live in the Facebook, Mumbai office. Using a clean black sketch outline on a bright yellow backdrop, the composition frames fragments of local daily lives, iconic yellow-black taxis, cutting chai, local trains, and historical architecture - celebrating the stories that bring Mumbai's community together.",
        dimensions: "7.5 ft (h) X 12 ft (w)",
        materials: "Asian Royal Paints on wall",
        heroImage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/3244ddbb-5069-4df0-82b4-fed4fd22f5d6.jpg"),
        focusImage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/3244ddbb-5069-4df0-82b4-fed4fd22f5d6.jpg"),
        middleBanner: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/3244ddbb-5069-4df0-82b4-fed4fd22f5d6.jpg"),
        extraGridImages: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/a25307fa-aa19-474f-ac1d-9a18ad5151f2.jpg"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/b9ffbdfb-91c0-4e66-bc3d-c667dfac426c.jpg"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/335e443c-f51c-4c52-b29f-1e336871da86.jpg")
        ],
        btsImages: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/f7d3d71c-9d42-42d4-9d1d-8511cc71dc0f.jpg"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/6b4fe0af-3ce3-40f0-b1c8-f1fef5f2f87a.jpg"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/0ee31ecd-4d33-4085-acc9-717763be15e1.jpg")
        ]
    },
    {
        id: "tree-of-life",
        title: "tree of life",
        subtitle: "Facebook Office, Mumbai",
        quote: "“Life held in details, Expressed in shapes”",
        description: "A paper-cut artwork created for Facebook Live in the Facebook, Mumbai office. Inspired by the Gond traditional art, this piece celebrates the natural community, animals, and life. The modular layers introduce architectural rhythm and depth, reflecting the cultural heritage in a modern digital environment.",
        dimensions: "7.5 ft (h) X 15 ft (w)",
        materials: "Paper cut layers, custom frame",
        heroImage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/ace1bebf-c8e9-476d-b105-693b3a425f08.jpg"),
        focusImage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/c82aeeed-b9e7-4f3a-9967-e67513330b29.jpg"),
        middleBanner: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/ace1bebf-c8e9-476d-b105-693b3a425f08.jpg"),
        extraGridImages: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/1593ce88-a955-418e-8fc7-593fa7264406.jpg"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/03c8e7e0-2cb0-4aac-b51e-943da0c350b0.jpg"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/77c36f99-c8d9-439d-a2a7-f9e8e9830e4a.jpg")
        ],
        btsImages: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/3898ba83-2147-4d05-b40f-eb532b3b0aa8.jpg"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/64bdf05e-d411-4c2f-88f9-b5b0e7e55ad4.jpg"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/f1c628a1-ce9b-4b3b-ac2d-5077fb0759e3.jpg"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/ff07d7ab-69ce-4e8b-8ffd-dff5080433d5.jpg")
        ]
    },
    {
        id: "maa-saraswati",
        title: "maa saraswati",
        subtitle: "Oritso Office, Noida",
        quote: "“The flow of learning. The rhythm of wisdom.”",
        description: "A custom wall painting celebrating Maa Saraswati at the Oritso Office reception. Reimagining the traditional iconography through stylized strokes and an inspiring brand-accents palette, the artwork reflects Oritso's identity, design craft, and cultural focus.",
        dimensions: "8 ft (h) X 8 ft (w)",
        materials: "Asian Royal Paints on wall",
        heroImage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/826acde8-bb1e-4907-94b0-c2e7da6ab5b4.jpg"),
        focusImage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/826acde8-bb1e-4907-94b0-c2e7da6ab5b4.jpg"),
        middleBanner: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/826acde8-bb1e-4907-94b0-c2e7da6ab5b4.jpg"),
        btsImages: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/93b80628-3b5d-4bc1-939e-372276ee8589.jpg"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/7c38a905-c18b-415b-a3d3-fd25e0638542.jpg"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/43f0b2b1-4671-43ed-9729-20042bcb4a2b.jpg")
        ]
    },
    {
        id: "strings-of-sound",
        title: "strings of sound made visible",
        subtitle: "Oritso Office, Noida",
        quote: "“Sound visualized. Vibrations captured.”",
        description: "Bespoke acoustic feature canvas installations created for Oritso's conference and huddle spaces. Intricate geometric motifs symbolize sound waves, and local architectural structures meet digital rhythm. Functional, gorgeous, and brand-driven, enhancing creative vibes throughout.",
        dimensions: "5 ft (h) X 5 ft (w)",
        materials: "Acrylic on Acoustic boards, custom canvas frames",
        heroImage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/335e443c-f51c-4c52-b29f-1e336871da86.jpg"),
        focusImage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/335e443c-f51c-4c52-b29f-1e336871da86.jpg"),
        middleBanner: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/335e443c-f51c-4c52-b29f-1e336871da86.jpg"),
        btsImages: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/fa98eb84-cdac-47f0-be42-d234cf98a03d.jpg"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/335e443c-f51c-4c52-b29f-1e336871da86.jpg")
        ]
    },
    {
        id: "portrait-landscape",
        title: "a portrait of landscape",
        subtitle: "The Samudra House, Kashid",
        quote: "“The earth and sea, Framed in one gaze”",
        description: "A private beach house lounge feature mural. Inspired by Caspar David Friedrich's landscape vistas, the artwork reimagines Kashid's coast as an expressive romantic landscape painting. Hand-crafted textures bring a deep natural narrative that completely elevates the beach house's modern design.",
        dimensions: "9 ft (h) X 14 ft (w)",
        materials: "Asian Royal Paints, structural plaster on wall",
        heroImage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/9a4e49b3-701a-4c9c-8302-ecca8e6fdb65.jpg"),
        focusImage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/9a4e49b3-701a-4c9c-8302-ecca8e6fdb65.jpg"),
        middleBanner: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/9a4e49b3-701a-4c9c-8302-ecca8e6fdb65.jpg"),
        btsImages: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/9a4e49b3-701a-4c9c-8302-ecca8e6fdb65.jpg"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/9a4e49b3-701a-4c9c-8302-ecca8e6fdb65.jpg")
        ]
    },
    {
        id: "rituals-adornment",
        title: "rituals of adornment",
        subtitle: "Private Residence, Pune",
        quote: "“Collected over generations. Treasured in a moment”",
        description: "A hand-painted composition of Maharashtrian traditional and adornment accessories, created across multiple canvases to frame the dressing area - celebrating timeless rituals of beauty and heritage.",
        dimensions: "1 ft (h) X 1 ft (w), multiple frames",
        materials: "Acrylic on canvas",
        heroImage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/c67d1d8f-1c00-424c-8d47-0b4c2dee8236.jpg"),
        focusImage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/50ba21c6-c16f-4438-b5d0-c528d68f317e.jpg"),
        middleBanner: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/c67d1d8f-1c00-424c-8d47-0b4c2dee8236.jpg"),
        extraGridImages: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/e8699605-7336-4a32-a37d-3f78dc8c8616.jpg"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/3193c6b3-1f80-4b6a-b94e-5bc8c1c25439.jpg")
        ],
        btsImages: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/72dd8dc9-e0f9-4b77-874a-2ef5072c8fa6.jpg"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/37cf2e7a-db16-48d6-8dfa-c06619197758.jpg"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/85ac08a4-a632-47cb-8940-927c90fa73dd.jpg"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/ed2ba671-e8c4-4ac3-b4b1-e1f03e75a862.jpg"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/acc28d5f-1656-47d6-9501-c6628ad05a5e.jpg"),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/projects/e6dcf6e7-52d8-4479-8c60-96b1137e547c.jpg")
        ]
    }
];
function ProjectDetail({ projectId, onClose }) {
    _s();
    const project = projectsData.find((p)=>p.id === projectId);
    // Lock body scroll while project details are open
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectDetail.useEffect": ()=>{
            document.body.style.overflow = "hidden";
            return ({
                "ProjectDetail.useEffect": ()=>{
                    document.body.style.overflow = "unset";
                }
            })["ProjectDetail.useEffect"];
        }
    }["ProjectDetail.useEffect"], []);
    if (!project) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ProjectDetail$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].projectMain,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ProjectDetail$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].backButton,
                onClick: onClose,
                "aria-label": "Go back to landing page",
                children: "← Back to Home"
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ProjectDetail.tsx",
                lineNumber: 381,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ProjectDetail$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heroSection,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ProjectDetail$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heroBackground,
                        style: {
                            backgroundImage: `url(${project.heroImage})`
                        }
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ProjectDetail.tsx",
                        lineNumber: 387,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ProjectDetail$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heroOverlay
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ProjectDetail.tsx",
                        lineNumber: 391,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ProjectDetail$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heroContent,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ProjectDetail$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].projectTitle,
                                children: project.title
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ProjectDetail.tsx",
                                lineNumber: 394,
                                columnNumber: 11
                            }, this),
                            project.subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ProjectDetail$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].projectSubtitle,
                                children: project.subtitle
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ProjectDetail.tsx",
                                lineNumber: 395,
                                columnNumber: 32
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ProjectDetail.tsx",
                        lineNumber: 393,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ProjectDetail.tsx",
                lineNumber: 386,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ProjectDetail$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].contentSection,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ProjectDetail$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].leftContent,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("blockquote", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ProjectDetail$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].quote,
                                children: project.quote
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ProjectDetail.tsx",
                                lineNumber: 402,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ProjectDetail$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].description,
                                children: project.description
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ProjectDetail.tsx",
                                lineNumber: 406,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ProjectDetail$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].specs,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Dimensions:"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ProjectDetail.tsx",
                                                lineNumber: 411,
                                                columnNumber: 16
                                            }, this),
                                            " ",
                                            project.dimensions
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ProjectDetail.tsx",
                                        lineNumber: 411,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Materials:"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ProjectDetail.tsx",
                                                lineNumber: 412,
                                                columnNumber: 16
                                            }, this),
                                            " ",
                                            project.materials
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ProjectDetail.tsx",
                                        lineNumber: 412,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ProjectDetail.tsx",
                                lineNumber: 410,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ProjectDetail.tsx",
                        lineNumber: 401,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ProjectDetail$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].rightContent,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ProjectDetail$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].focusImageContainer,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: project.focusImage,
                                alt: `${project.title} focus detail`,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ProjectDetail$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].focusImage
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ProjectDetail.tsx",
                                lineNumber: 418,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ProjectDetail.tsx",
                            lineNumber: 417,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ProjectDetail.tsx",
                        lineNumber: 416,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ProjectDetail.tsx",
                lineNumber: 400,
                columnNumber: 7
            }, this),
            project.middleBanner && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ProjectDetail$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].immersiveSection,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ProjectDetail$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].immersiveContainer,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: project.middleBanner,
                        alt: `${project.title} in context`,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ProjectDetail$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].immersiveImage
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ProjectDetail.tsx",
                        lineNumber: 431,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ProjectDetail.tsx",
                    lineNumber: 430,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ProjectDetail.tsx",
                lineNumber: 429,
                columnNumber: 9
            }, this),
            project.extraGridImages && project.extraGridImages.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ProjectDetail$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].gridSection,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ProjectDetail$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].imageGrid,
                    children: project.extraGridImages.map((imgUrl, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ProjectDetail$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].gridImageContainer,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: imgUrl,
                                alt: `${project.title} detail ${index + 1}`,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ProjectDetail$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].gridImage
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ProjectDetail.tsx",
                                lineNumber: 446,
                                columnNumber: 17
                            }, this)
                        }, index, false, {
                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ProjectDetail.tsx",
                            lineNumber: 445,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ProjectDetail.tsx",
                    lineNumber: 443,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ProjectDetail.tsx",
                lineNumber: 442,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ProjectDetail$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].btsSection,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ProjectDetail$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].btsHeading,
                        children: "behind the scenes"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ProjectDetail.tsx",
                        lineNumber: 459,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ProjectDetail$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].btsTickerContainer,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ProjectDetail$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].btsTickerTrack,
                            children: [
                                project.btsImages.map((imgUrl, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ProjectDetail$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].btsCard,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: imgUrl,
                                            alt: `${project.title} creation progress ${index + 1}`,
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ProjectDetail$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].btsImage
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ProjectDetail.tsx",
                                            lineNumber: 465,
                                            columnNumber: 17
                                        }, this)
                                    }, `bts-1-${index}`, false, {
                                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ProjectDetail.tsx",
                                        lineNumber: 464,
                                        columnNumber: 15
                                    }, this)),
                                project.btsImages.map((imgUrl, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ProjectDetail$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].btsCard,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: imgUrl,
                                            alt: `${project.title} creation progress ${index + 1}`,
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ProjectDetail$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].btsImage
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ProjectDetail.tsx",
                                            lineNumber: 475,
                                            columnNumber: 17
                                        }, this)
                                    }, `bts-2-${index}`, false, {
                                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ProjectDetail.tsx",
                                        lineNumber: 474,
                                        columnNumber: 15
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ProjectDetail.tsx",
                            lineNumber: 461,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ProjectDetail.tsx",
                        lineNumber: 460,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ProjectDetail.tsx",
                lineNumber: 458,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ProjectDetail.tsx",
        lineNumber: 379,
        columnNumber: 5
    }, this);
}
_s(ProjectDetail, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = ProjectDetail;
var _c;
__turbopack_context__.k.register(_c, "ProjectDetail");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MainLanding
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/ThePeachStudio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/ThePeachStudio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/ThePeachStudio/src/utils/paths.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ProjectDetail$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/ThePeachStudio/src/components/ProjectDetail.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
// Existing Assets
const THREE_CLOVER_ICON_URL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/landing/three-clover.svg");
const OFFERINGS_BULLET_URL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/landing/offering-bullet.svg");
// Brand logo — true vectors recoloured to the primary peach (#D47059). The
// icon is the peach fruit; the light variants are for the dark footer.
const PEACH_ICON_URL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/landing/peach-icon.svg");
const PEACH_WORDMARK_URL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/landing/peach-wordmark.svg");
const PEACH_WORDMARK_LIGHT_URL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/landing/peach-wordmark-light.svg");
const LINKEDIN_BG_URL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/landing/linkedin-bg.svg");
const LINKEDIN_VEC_URL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/landing/linkedin-vec.svg");
const INSTAGRAM_BG_URL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/landing/instagram-bg.svg");
const INSTAGRAM_VEC_URL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/landing/instagram-vec.svg");
// Newly Downloaded High-Fidelity Assets
const MAITREYEE_HEADSHOT = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/landing/maitreyee-headshot.png");
const POORVA_HEADSHOT = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/landing/poorva-headshot.png");
const FOOTER_BG = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/landing/footer-bg.png");
const HERO_FLOATING_1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/landing/hero-floating-1.jpg");
const HERO_FLOATING_2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/landing/hero-floating-2.jpg");
const HERO_FLOATING_3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/landing/hero-floating-3.jpg");
const HERO_FLOATING_4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/landing/hero-floating-4.jpg");
const HERO_FLOATING_5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/landing/hero-floating-5.jpg");
const HERO_FLOATING_6 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/landing/hero-floating-6.jpg");
const HERO_FLOATING_7 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/landing/hero-floating-7.jpg");
const HERO_FLOATING_8 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/landing/hero-floating-8.jpg");
const HERO_ORNAMENT = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/landing/hero-ornament.svg");
const INTRO_SEP_1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/landing/intro-sep-1.svg");
const INTRO_SEP_2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/landing/intro-sep-2.svg");
const QUOTE_ICON = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/landing/quote-icon.svg");
const PROCESS_DECOR_1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/landing/process-decor-1.svg");
const PROCESS_DECOR_2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/landing/process-decor-2.svg");
const PROCESS_DECOR_3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/landing/process-decor-3.svg");
const PROCESS_DECOR_4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/landing/process-decor-4.svg");
const PORTFOLIO_PROJECTS = [
    {
        id: "sealink",
        title: "sealink",
        image: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/landing/portfolio-sealink.jpg"),
        bgPosition: "7% 44.3%",
        bgSize: "188.4% auto"
    },
    {
        id: "soul-of-konkan",
        title: "the soul of konkan",
        image: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/landing/portfolio-soul-of-konkan.jpg"),
        bgPosition: "72.7% 47.7%",
        bgSize: "113.1% auto"
    },
    {
        id: "strategy-meets-space",
        title: "where strategy meets space",
        image: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/landing/portfolio-strategy-meets-space.jpg"),
        bgPosition: "100% 76%",
        bgSize: "139.6% auto"
    },
    {
        id: "mumbai-in-pixels",
        title: "mumbai in pixels",
        image: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/landing/portfolio-mumbai-in-pixels.jpg"),
        bgPosition: "45.3% 80.2%",
        bgSize: "158.7% auto"
    },
    {
        id: "elephant-mandala",
        title: "the elephant mandala",
        image: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/landing/portfolio-elephant-mandala.jpg"),
        bgPosition: "50% 36.4%",
        bgSize: "155.6% auto"
    },
    {
        id: "palm-arc",
        title: "under the palm arc",
        image: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/landing/portfolio-palm-arc.jpg"),
        bgPosition: "78.7% 25.6%",
        bgSize: "216.2% auto"
    },
    {
        id: "bloomspace",
        title: "bloomspace",
        image: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/landing/portfolio-bloomspace.jpg"),
        bgPosition: "center 12.7%",
        bgSize: "100% auto"
    },
    {
        id: "city-threshold",
        title: "a city of every threshold",
        image: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/landing/portfolio-city-threshold.jpg"),
        bgPosition: "50% 22.1%",
        bgSize: "165.2% auto"
    },
    {
        id: "strings-of-sound",
        title: "strings of sound made visible",
        image: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/landing/portfolio-strings-of-sound.jpg"),
        bgPosition: "35.8% 58%",
        bgSize: "211.2% auto"
    },
    {
        id: "portrait-landscape",
        title: "a portrait of landscape",
        image: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/landing/portfolio-portrait-landscape.jpg"),
        bgPosition: "0% 40.3%",
        bgSize: "120.1% auto"
    },
    {
        id: "maa-saraswati",
        title: "maa saraswati",
        image: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/landing/portfolio-maa-saraswati.jpg"),
        bgPosition: "center 50%",
        bgSize: "100% auto"
    },
    {
        id: "birdsong-october",
        title: "birdsong in october",
        image: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/landing/portfolio-birdsong-october.jpg"),
        bgPosition: "center 58.7%",
        bgSize: "100% auto"
    },
    {
        id: "many-stories",
        title: "many stories, one city!",
        image: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/landing/portfolio-many-stories.jpg"),
        bgPosition: "center 33.3%",
        bgSize: "100% auto"
    },
    {
        id: "tree-of-life",
        title: "tree of life",
        image: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/landing/portfolio-tree-of-life.jpg"),
        bgPosition: "center 50%",
        bgSize: "cover"
    },
    {
        id: "rituals-adornment",
        title: "rituals of adornment",
        image: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/landing/portfolio-rituals-adornment.jpg"),
        bgPosition: "71.5% 15%",
        bgSize: "232.3% auto"
    }
];
const TESTIMONIALS = [
    {
        id: "sarah-jenkins",
        quote: "The Peach Studio completely transformed our retail space. They understood our vision before we even fully articulated it. Absolute magic.",
        author: "Sarah Jenkins",
        role: "Founder, Oritso"
    },
    {
        id: "marcus-chen",
        quote: "Working with them felt like a true collaboration. They brought both strategic layout thinking and exquisite artistic detail to our office project.",
        author: "Marcus Chen",
        role: "Creative Director, JLL"
    },
    {
        id: "elena-rostova",
        quote: "Youthful energy but incredibly mature execution. They delivered a massive, complex wall installation on schedule and with breathtaking beauty.",
        author: "Elena Rostova",
        role: "Experience Officer, JSW"
    }
];
const CARD_SEQUENCE = [
    "card7",
    "card1",
    "card4",
    "card2",
    "card5",
    "card3",
    "card6",
    "card8"
];
function MainLanding({ onStartConversation }) {
    _s();
    const [hoveredProject, setHoveredProject] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const hoveredProjectRef = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    const [showScrollArrow, setShowScrollArrow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hasScrolled, setHasScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [visibleCardIds, setVisibleCardIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isDispersed, setIsDispersed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeProjectId, setActiveProjectId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isMounted, setIsMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [revealedSteps, setRevealedSteps] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const processRef = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "MainLanding.useEffect": ()=>{
            hoveredProjectRef.current = hoveredProject;
        }
    }["MainLanding.useEffect"], [
        hoveredProject
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "MainLanding.useEffect": ()=>{
            setTimeout({
                "MainLanding.useEffect": ()=>{
                    setIsMounted(true);
                }
            }["MainLanding.useEffect"], 0);
            // 1. Staggered fade-in of cards stacking in center
            const timers = [];
            CARD_SEQUENCE.forEach({
                "MainLanding.useEffect": (cardId, index)=>{
                    const timer = setTimeout({
                        "MainLanding.useEffect.timer": ()=>{
                            setVisibleCardIds({
                                "MainLanding.useEffect.timer": (prev)=>[
                                        ...prev,
                                        cardId
                                    ]
                            }["MainLanding.useEffect.timer"]);
                        }
                    }["MainLanding.useEffect.timer"], index * 200);
                    timers.push(timer);
                }
            }["MainLanding.useEffect"]);
            // 2. Disperse together after a hold beat (at 2.0s)
            const disperseTimer = setTimeout({
                "MainLanding.useEffect.disperseTimer": ()=>{
                    setIsDispersed(true);
                }
            }["MainLanding.useEffect.disperseTimer"], 2000);
            timers.push(disperseTimer);
            // Scroll arrow appears at a 3-4 second delay after the text has appeared.
            // All animations complete and text finishes appearing by ~2.1s, so 5.5s total delay.
            const arrowTimer = setTimeout({
                "MainLanding.useEffect.arrowTimer": ()=>{
                    setShowScrollArrow(true);
                }
            }["MainLanding.useEffect.arrowTimer"], 5500);
            timers.push(arrowTimer);
            const handleScroll = {
                "MainLanding.useEffect.handleScroll": ()=>{
                    if ("TURBOPACK compile-time truthy", 1) {
                        if (window.scrollY > 50) {
                            setHasScrolled(true);
                        }
                        if (window.innerWidth > 1024) return;
                    }
                    const rows = document.querySelectorAll(`[data-project-id]`);
                    let closestProject = null;
                    let minDistance = Infinity;
                    const viewportCenter = window.innerHeight / 2;
                    rows.forEach({
                        "MainLanding.useEffect.handleScroll": (row)=>{
                            const rect = row.getBoundingClientRect();
                            const rectCenter = rect.top + rect.height / 2;
                            const distance = Math.abs(viewportCenter - rectCenter);
                            if (distance < minDistance) {
                                minDistance = distance;
                                closestProject = row.getAttribute("data-project-id");
                            }
                        }
                    }["MainLanding.useEffect.handleScroll"]);
                    if (closestProject) {
                        const projectObj = PORTFOLIO_PROJECTS.find({
                            "MainLanding.useEffect.handleScroll.projectObj": (p)=>p.id === closestProject
                        }["MainLanding.useEffect.handleScroll.projectObj"]);
                        if (projectObj && (!hoveredProjectRef.current || hoveredProjectRef.current.id !== projectObj.id)) {
                            setHoveredProject(projectObj);
                        }
                    }
                }
            }["MainLanding.useEffect.handleScroll"];
            // Initialize on load and resize
            handleScroll();
            window.addEventListener("scroll", handleScroll, {
                passive: true
            });
            window.addEventListener("resize", handleScroll);
            return ({
                "MainLanding.useEffect": ()=>{
                    timers.forEach(clearTimeout);
                    window.removeEventListener("scroll", handleScroll);
                    window.removeEventListener("resize", handleScroll);
                }
            })["MainLanding.useEffect"];
        }
    }["MainLanding.useEffect"], []);
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "MainLanding.useEffect": ()=>{
            if (!isMounted) return;
            if (("TURBOPACK compile-time value", "object") !== "undefined" && "IntersectionObserver" in window) {
                const observer = new IntersectionObserver({
                    "MainLanding.useEffect": ([entry])=>{
                        if (entry.isIntersecting) {
                            let count = 0;
                            const interval = setInterval({
                                "MainLanding.useEffect.interval": ()=>{
                                    count += 1;
                                    setRevealedSteps(count);
                                    if (count >= 4) {
                                        clearInterval(interval);
                                    }
                                }
                            }["MainLanding.useEffect.interval"], 300);
                            observer.unobserve(entry.target);
                        }
                    }
                }["MainLanding.useEffect"], {
                    threshold: 0.15
                });
                if (processRef.current) {
                    observer.observe(processRef.current);
                }
                return ({
                    "MainLanding.useEffect": ()=>{
                        observer.disconnect();
                    }
                })["MainLanding.useEffect"];
            } else {
                // Fallback for environments without IntersectionObserver (e.g. Vitest JSDOM)
                setTimeout({
                    "MainLanding.useEffect": ()=>{
                        setRevealedSteps(4);
                    }
                }["MainLanding.useEffect"], 0);
            }
        }
    }["MainLanding.useEffect"], [
        isMounted
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].landingContainer,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heroSection,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heroWrapper,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].floatingGrid} ${isDispersed ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].disperseGrid : ""}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].polaroidCard} ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card1} ${visibleCardIds.includes("card1") ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardVisible : ""}`,
                                    style: {
                                        zIndex: CARD_SEQUENCE.indexOf("card1") + 1
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: HERO_FLOATING_1,
                                        alt: "Peach Studio Creation",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].polaroidImg
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                        lineNumber: 234,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                    lineNumber: 230,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].polaroidCard} ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card2} ${visibleCardIds.includes("card2") ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardVisible : ""}`,
                                    style: {
                                        zIndex: CARD_SEQUENCE.indexOf("card2") + 1
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: HERO_FLOATING_2,
                                        alt: "Studio Sketchwork",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].polaroidImg
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                        lineNumber: 241,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                    lineNumber: 237,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].polaroidCard} ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card3} ${visibleCardIds.includes("card3") ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardVisible : ""}`,
                                    style: {
                                        zIndex: CARD_SEQUENCE.indexOf("card3") + 1
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: HERO_FLOATING_3,
                                        alt: "Completed Mural Detail",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].polaroidImg
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                        lineNumber: 248,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                    lineNumber: 244,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].polaroidCard} ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card4} ${visibleCardIds.includes("card4") ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardVisible : ""}`,
                                    style: {
                                        zIndex: CARD_SEQUENCE.indexOf("card4") + 1
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: HERO_FLOATING_4,
                                        alt: "Exhibition Artpiece",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].polaroidImg
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                        lineNumber: 255,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                    lineNumber: 251,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].polaroidCard} ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card5} ${visibleCardIds.includes("card5") ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardVisible : ""}`,
                                    style: {
                                        zIndex: CARD_SEQUENCE.indexOf("card5") + 1
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: HERO_FLOATING_5,
                                        alt: "Traditional Motif Sketch",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].polaroidImg
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                        lineNumber: 262,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                    lineNumber: 258,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].polaroidCard} ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card6} ${visibleCardIds.includes("card6") ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardVisible : ""}`,
                                    style: {
                                        zIndex: CARD_SEQUENCE.indexOf("card6") + 1
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: HERO_FLOATING_6,
                                        alt: "Vibrant Wall Art",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].polaroidImg
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                        lineNumber: 269,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                    lineNumber: 265,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].polaroidCard} ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card7} ${visibleCardIds.includes("card7") ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardVisible : ""}`,
                                    style: {
                                        zIndex: CARD_SEQUENCE.indexOf("card7") + 1
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: HERO_FLOATING_7,
                                        alt: "Studio Showcase Detail",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].polaroidImg
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                        lineNumber: 276,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                    lineNumber: 272,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].polaroidCard} ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card8} ${visibleCardIds.includes("card8") ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardVisible : ""}`,
                                    style: {
                                        zIndex: CARD_SEQUENCE.indexOf("card8") + 1
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: HERO_FLOATING_8,
                                        alt: "Aesthetic Space Installation",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].polaroidImg
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                        lineNumber: 283,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                    lineNumber: 279,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                            lineNumber: 228,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heroCore} ${isDispersed ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heroCoreVisible : ""}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoAndMark,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: PEACH_ICON_URL,
                                            alt: "",
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].peachIcon
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                            lineNumber: 290,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: PEACH_WORDMARK_URL,
                                            alt: "The Peach Studio",
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].peachWordmark
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                            lineNumber: 291,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                    lineNumber: 289,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heroHeading,
                                    children: [
                                        "meaningful ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].italicSerif,
                                            children: "art..."
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                            lineNumber: 295,
                                            columnNumber: 26
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                            lineNumber: 296,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].italicSerif,
                                            children: "memorable"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                            lineNumber: 297,
                                            columnNumber: 15
                                        }, this),
                                        " spaces!"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                    lineNumber: 294,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heroOrnamentRow} ${showScrollArrow && !hasScrolled ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].arrowVisible : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].arrowHidden}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: HERO_ORNAMENT,
                                        alt: "",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heroOrnament
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                        lineNumber: 301,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                    lineNumber: 300,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                            lineNumber: 288,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                    lineNumber: 226,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                lineNumber: 225,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].visionSection,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].visionBanner,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].visionText,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].boldPeach,
                                children: "The Peach Studio"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                lineNumber: 311,
                                columnNumber: 13
                            }, this),
                            " brings together illustration, murals, installations, and spatial design to create environments that",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].visionWords,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].italicPlay,
                                        children: "inspire"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                        lineNumber: 314,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: INTRO_SEP_1,
                                        alt: "",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].visionSeparator
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                        lineNumber: 315,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].italicPlay,
                                        children: "connect"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                        lineNumber: 316,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: INTRO_SEP_2,
                                        alt: "",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].visionSeparator
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                        lineNumber: 317,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].italicPlay,
                                        children: "delight"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                        lineNumber: 318,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                lineNumber: 313,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                        lineNumber: 310,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                    lineNumber: 309,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                lineNumber: 308,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].curatedSection,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionHeader,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].curatedHeading,
                            children: [
                                "curated ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].curatedEmphasis,
                                    children: "works"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                    lineNumber: 328,
                                    columnNumber: 21
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                            lineNumber: 327,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                        lineNumber: 326,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].worksList,
                        children: PORTFOLIO_PROJECTS.map((project)=>{
                            const isHovered = hoveredProject?.id === project.id;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-project-id": project.id,
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].projectRow} ${isHovered ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].activeRow : ""}`,
                                onClick: ()=>setActiveProjectId(project.id),
                                role: "button",
                                tabIndex: 0,
                                onKeyDown: (e)=>{
                                    if (e.key === "Enter" || e.key === " ") {
                                        e.preventDefault();
                                        setActiveProjectId(project.id);
                                    }
                                },
                                onMouseEnter: ()=>{
                                    if (("TURBOPACK compile-time value", "object") !== "undefined" && window.innerWidth > 1024) {
                                        setHoveredProject(project);
                                    }
                                },
                                onMouseLeave: ()=>{
                                    if (("TURBOPACK compile-time value", "object") !== "undefined" && window.innerWidth > 1024) {
                                        setHoveredProject(null);
                                    }
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].projectRowBgImg,
                                        style: {
                                            backgroundImage: `linear-gradient(to right, #001b2e 0%, rgba(0, 27, 46, 0) 46%), url(${project.image})`,
                                            backgroundPosition: project.bgPosition || "center",
                                            backgroundSize: project.bgSize || "cover",
                                            opacity: isHovered ? 1 : 0,
                                            transform: "scale(1)"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                        lineNumber: 362,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].projectRowInner,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].projectTitleContainer,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].projectTitle,
                                                    children: project.title
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                                    lineNumber: 378,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].viewProjectLink} ${isHovered ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].viewProjectLinkVisible : ""}`,
                                                    "aria-hidden": !isHovered,
                                                    children: "View Project"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                                    lineNumber: 379,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                            lineNumber: 377,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                        lineNumber: 373,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, project.id, true, {
                                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                lineNumber: 337,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                        lineNumber: 332,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                lineNumber: 325,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].processSection,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].processContainer,
                    ref: processRef,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].processHeader,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].processSubtitle,
                                    children: "our process"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                    lineNumber: 397,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].processTitle,
                                    children: [
                                        "from sketch ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].processEmphasis,
                                            children: "to space"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                            lineNumber: 399,
                                            columnNumber: 27
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                    lineNumber: 398,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                            lineNumber: 396,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].processGrid,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].processStep} ${!isMounted || revealedSteps >= 1 ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].processStepVisible : ""}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].processNumber,
                                            children: "01"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                            lineNumber: 407,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].processContentBox,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stepTitleRow,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: PROCESS_DECOR_1,
                                                            alt: "",
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stepDecorIcon
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                                            lineNumber: 410,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stepTitle,
                                                            children: "Start with the Space"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                                            lineNumber: 411,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                                    lineNumber: 409,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stepDescription,
                                                    children: "We visit, listen, and gather everything needed before ideas begin."
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                                    lineNumber: 413,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                            lineNumber: 408,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                    lineNumber: 406,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].processStep} ${!isMounted || revealedSteps >= 2 ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].processStepVisible : ""}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].processNumber,
                                            children: "02"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                            lineNumber: 421,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].processContentBox,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stepTitleRow,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: PROCESS_DECOR_2,
                                                            alt: "",
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stepDecorIcon
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                                            lineNumber: 424,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stepTitle,
                                                            children: "Shape the Idea"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                                            lineNumber: 425,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                                    lineNumber: 423,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stepDescription,
                                                    children: "Through references and design exploration, the direction starts to emerge."
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                                    lineNumber: 427,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                            lineNumber: 422,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                    lineNumber: 420,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].processStep} ${!isMounted || revealedSteps >= 3 ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].processStepVisible : ""}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].processNumber,
                                            children: "03"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                            lineNumber: 435,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].processContentBox,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stepTitleRow,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: PROCESS_DECOR_4,
                                                            alt: "",
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stepDecorIcon
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                                            lineNumber: 438,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stepTitle,
                                                            children: "See it in Place"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                                            lineNumber: 439,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                                    lineNumber: 437,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stepDescription,
                                                    children: "The design is mapped into the space so every detail feels right."
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                                    lineNumber: 441,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                            lineNumber: 436,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                    lineNumber: 434,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].processStep} ${!isMounted || revealedSteps >= 4 ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].processStepVisible : ""}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].processNumber,
                                            children: "04"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                            lineNumber: 449,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].processContentBox,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stepTitleRow,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: PROCESS_DECOR_3,
                                                            alt: "",
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stepDecorIcon
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                                            lineNumber: 452,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stepTitle,
                                                            children: "Bring it to Life"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                                            lineNumber: 453,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                                    lineNumber: 451,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stepDescription,
                                                    children: "With everything approved, we create, install, and deliver the final work."
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                                    lineNumber: 455,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                            lineNumber: 450,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                    lineNumber: 448,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                            lineNumber: 404,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                    lineNumber: 395,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                lineNumber: 394,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].offeringsSection,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].offeringsContainer,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].offeringsTitleCol,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: THREE_CLOVER_ICON_URL,
                                    alt: "",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].offeringsIcon
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                    lineNumber: 469,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].offeringsSubtitle,
                                    children: "what we do"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                    lineNumber: 470,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].offeringsTitle,
                                    children: [
                                        "our",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].offeringsEmphasis,
                                            children: "offerings"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                            lineNumber: 473,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                    lineNumber: 471,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                            lineNumber: 468,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].verticalDivider
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                            lineNumber: 477,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].offeringsCol,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].offeringsHeader,
                                    children: "custom services"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                    lineNumber: 481,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].offeringsList,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: OFFERINGS_BULLET_URL,
                                                    alt: "",
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bulletIcon
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                                    lineNumber: 484,
                                                    columnNumber: 17
                                                }, this),
                                                "wall painting"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                            lineNumber: 483,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: OFFERINGS_BULLET_URL,
                                                    alt: "",
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bulletIcon
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                                    lineNumber: 488,
                                                    columnNumber: 17
                                                }, this),
                                                "installations"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                            lineNumber: 487,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: OFFERINGS_BULLET_URL,
                                                    alt: "",
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bulletIcon
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                                    lineNumber: 492,
                                                    columnNumber: 17
                                                }, this),
                                                "canvas painting"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                            lineNumber: 491,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: OFFERINGS_BULLET_URL,
                                                    alt: "",
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bulletIcon
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                                    lineNumber: 496,
                                                    columnNumber: 17
                                                }, this),
                                                "space design"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                            lineNumber: 495,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: OFFERINGS_BULLET_URL,
                                                    alt: "",
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bulletIcon
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                                    lineNumber: 500,
                                                    columnNumber: 17
                                                }, this),
                                                "storytelling"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                            lineNumber: 499,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                    lineNumber: 482,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                            lineNumber: 480,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].verticalDivider
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                            lineNumber: 506,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].offeringsCol,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].offeringsHeader,
                                    children: "products"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                    lineNumber: 510,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].offeringsList,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: OFFERINGS_BULLET_URL,
                                                    alt: "",
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bulletIcon
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                                    lineNumber: 513,
                                                    columnNumber: 17
                                                }, this),
                                                "wallpapers"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                            lineNumber: 512,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: OFFERINGS_BULLET_URL,
                                                    alt: "",
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bulletIcon
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                                    lineNumber: 517,
                                                    columnNumber: 17
                                                }, this),
                                                "paintings"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                            lineNumber: 516,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                    lineNumber: 511,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                            lineNumber: 509,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                    lineNumber: 466,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                lineNumber: 465,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].testimonialsSection,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].testimonialsHeader,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].testimonialsSubtitle,
                                children: "dont just take our word for it"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                lineNumber: 528,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].testimonialsTitle,
                                children: [
                                    "client ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].testimonialsEmphasis,
                                        children: "testimonials"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                        lineNumber: 530,
                                        columnNumber: 20
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                lineNumber: 529,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                        lineNumber: 527,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].testimonialsGrid,
                        children: TESTIMONIALS.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].testimonialCard,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].quoteIconBox,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: QUOTE_ICON,
                                            alt: "",
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].quoteIcon
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                            lineNumber: 538,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                        lineNumber: 537,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].quoteText,
                                        children: [
                                            '"',
                                            t.quote,
                                            '"'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                        lineNumber: 540,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].authorDivider
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                        lineNumber: 541,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].authorBox,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].authorName,
                                                children: t.author
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                                lineNumber: 543,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].authorRole,
                                                children: t.role
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                                lineNumber: 544,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                        lineNumber: 542,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, t.id, true, {
                                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                lineNumber: 536,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                        lineNumber: 534,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                lineNumber: 526,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].teamSection,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].teamHeaderRow,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].teamTitleBox,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].teamSubtitle,
                                        children: "small team, big stories"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                        lineNumber: 555,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].teamTitle,
                                        children: [
                                            "the peachy ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].teamEmphasis,
                                                children: "team"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                                lineNumber: 557,
                                                columnNumber: 26
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                        lineNumber: 556,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                lineNumber: 554,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].teamSubDesc,
                                children: "Together, they blend art, design, strategy, and storytelling to create immersive, joyful and meaningful environments that inspire connection and leave a lasting impression."
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                lineNumber: 560,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                        lineNumber: 553,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].teamGrid,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].teamProfile,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].headshotContainer,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: MAITREYEE_HEADSHOT,
                                            alt: "Maitreyee Nilawar",
                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].headshotImg} ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].headshotMaitreyee}`
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                            lineNumber: 569,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                        lineNumber: 568,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].profileBio,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].profileName,
                                                children: "Maitreyee Nilawar"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                                lineNumber: 576,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].profileRole,
                                                children: "Director of visual delight"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                                lineNumber: 577,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].profileDescription,
                                                children: "Maitreyee, an alumna of Sir J.J. School of Art and IIT Bombay, is a visual artist with a keen eye for detail and aesthetics. She specializes in transforming spaces through art and design, bringing beauty, character, and emotional depth to every project."
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                                lineNumber: 578,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                        lineNumber: 575,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                lineNumber: 567,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].teamProfile,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].headshotContainer,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: POORVA_HEADSHOT,
                                            alt: "Poorva Kelkar",
                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].headshotImg} ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].headshotPoorva}`
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                            lineNumber: 587,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                        lineNumber: 586,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].profileBio,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].profileName,
                                                children: "Poorva Kelkar"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                                lineNumber: 594,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].profileRole,
                                                children: "Director of thoughtful mischief"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                                lineNumber: 595,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].profileDescription,
                                                children: "Poorva, an architect, product designer, and marketing specialist, is an alumna of NID and IIM Ahmedabad. She combines strategic thinking with creative exploration, helping shape the studio's vision while creating experiences that bring people, stories, and spaces together."
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                                lineNumber: 596,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                        lineNumber: 593,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                lineNumber: 585,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                        lineNumber: 565,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                lineNumber: 552,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ctaSection,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ctaContainer,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ctaTitle,
                            children: [
                                "Let’s create a space that ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ctaEmphasis,
                                    children: "speaks"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                    lineNumber: 608,
                                    columnNumber: 39
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                            lineNumber: 607,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ctaDescription,
                            children: [
                                "Every meaningful project begins with a simple conversation.",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                    lineNumber: 611,
                                    columnNumber: 72
                                }, this),
                                "We’d love if you share your vision with us."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                            lineNumber: 610,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ctaButton,
                            onClick: onStartConversation,
                            children: "Start a Conversation"
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                            lineNumber: 614,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                    lineNumber: 606,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                lineNumber: 605,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].footerSection,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].footerBgBox,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: FOOTER_BG,
                            alt: "",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].footerBgImg
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                            lineNumber: 624,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                        lineNumber: 623,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].footerContainer,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].footerMainGrid,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].socialCol,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].socialIconsRow,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "https://www.linkedin.com/company/the-peach-studio-in/about/",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].socialLink,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: LINKEDIN_BG_URL,
                                                        alt: "",
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].socialIconBg
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                                        lineNumber: 634,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: LINKEDIN_VEC_URL,
                                                        alt: "LinkedIn",
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].socialIconVec
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                                        lineNumber: 635,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                                lineNumber: 633,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "https://www.instagram.com/thepeachstudio.in/",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].socialLink,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: INSTAGRAM_BG_URL,
                                                        alt: "",
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].socialIconBg
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                                        lineNumber: 638,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: INSTAGRAM_VEC_URL,
                                                        alt: "Instagram",
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].socialIconVec
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                                        lineNumber: 639,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                                lineNumber: 637,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                        lineNumber: 632,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                    lineNumber: 631,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].wordmarkCol,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].footerLogoRow,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: PEACH_ICON_URL,
                                                    alt: "",
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].footerWordmarkIcon
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                                    lineNumber: 647,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: PEACH_WORDMARK_URL,
                                                    alt: "The Peach Studio",
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].footerWordmark
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                                    lineNumber: 648,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                            lineNumber: 646,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].metadataRow,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].copyrightMark,
                                                    "aria-hidden": "true",
                                                    children: "©"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                                    lineNumber: 652,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "2026"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                                    lineNumber: 655,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].metadataLabelSep
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                                    lineNumber: 656,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "The Peach Studio"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                                    lineNumber: 657,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].metadataLabelSep
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                                    lineNumber: 658,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "All rights reserved"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                                    lineNumber: 659,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                            lineNumber: 651,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                    lineNumber: 645,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].contactCol,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].contactHeader,
                                            children: "Let’s get in touch"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                            lineNumber: 665,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].contactDetails,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "mailto:poorva.kelkar@gmail.com",
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].contactLink,
                                                    children: "poorva.kelkar@gmail.com"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                                    lineNumber: 667,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "tel:+919217689001",
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].contactLink,
                                                    children: "+91 92176 89001"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                                    lineNumber: 670,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                            lineNumber: 666,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                    lineNumber: 664,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                            lineNumber: 629,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                        lineNumber: 627,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                lineNumber: 621,
                columnNumber: 7
            }, this),
            activeProjectId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ProjectDetail$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                projectId: activeProjectId,
                onClose: ()=>setActiveProjectId(null)
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                lineNumber: 680,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
        lineNumber: 223,
        columnNumber: 5
    }, this);
}
_s(MainLanding, "UtZaU4xBhPSJ4vUnj5XQYc497GU=");
_c = MainLanding;
var _c;
__turbopack_context__.k.register(_c, "MainLanding");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "closeButton": "ContactModal-module__F-JUqG__closeButton",
  "closeIconImg": "ContactModal-module__F-JUqG__closeIconImg",
  "directCaption": "ContactModal-module__F-JUqG__directCaption",
  "directContacts": "ContactModal-module__F-JUqG__directContacts",
  "directIcon": "ContactModal-module__F-JUqG__directIcon",
  "directIconImg": "ContactModal-module__F-JUqG__directIconImg",
  "directLinkCard": "ContactModal-module__F-JUqG__directLinkCard",
  "directRow": "ContactModal-module__F-JUqG__directRow",
  "directTextCol": "ContactModal-module__F-JUqG__directTextCol",
  "directTitle": "ContactModal-module__F-JUqG__directTitle",
  "directValue": "ContactModal-module__F-JUqG__directValue",
  "divider": "ContactModal-module__F-JUqG__divider",
  "errorText": "ContactModal-module__F-JUqG__errorText",
  "fadeInState": "ContactModal-module__F-JUqG__fadeInState",
  "fileSelectedBadge": "ContactModal-module__F-JUqG__fileSelectedBadge",
  "form": "ContactModal-module__F-JUqG__form",
  "formContainer": "ContactModal-module__F-JUqG__formContainer",
  "formGroup": "ContactModal-module__F-JUqG__formGroup",
  "header": "ContactModal-module__F-JUqG__header",
  "hiddenFileInput": "ContactModal-module__F-JUqG__hiddenFileInput",
  "input": "ContactModal-module__F-JUqG__input",
  "label": "ContactModal-module__F-JUqG__label",
  "modalCard": "ContactModal-module__F-JUqG__modalCard",
  "modalOverlay": "ContactModal-module__F-JUqG__modalOverlay",
  "nameFormGroup": "ContactModal-module__F-JUqG__nameFormGroup",
  "nameRow": "ContactModal-module__F-JUqG__nameRow",
  "overlayActive": "ContactModal-module__F-JUqG__overlayActive",
  "radioCard": "ContactModal-module__F-JUqG__radioCard",
  "radioCardActive": "ContactModal-module__F-JUqG__radioCardActive",
  "radioContainer": "ContactModal-module__F-JUqG__radioContainer",
  "radioContent": "ContactModal-module__F-JUqG__radioContent",
  "radioDesc": "ContactModal-module__F-JUqG__radioDesc",
  "radioIcon": "ContactModal-module__F-JUqG__radioIcon",
  "radioIconContainer": "ContactModal-module__F-JUqG__radioIconContainer",
  "radioTitle": "ContactModal-module__F-JUqG__radioTitle",
  "roleInputsContainer": "ContactModal-module__F-JUqG__roleInputsContainer",
  "rowInputs": "ContactModal-module__F-JUqG__rowInputs",
  "rowInputsContainer": "ContactModal-module__F-JUqG__rowInputsContainer",
  "scaleInState": "ContactModal-module__F-JUqG__scaleInState",
  "stateButton": "ContactModal-module__F-JUqG__stateButton",
  "stateContainer": "ContactModal-module__F-JUqG__stateContainer",
  "stateDescription": "ContactModal-module__F-JUqG__stateDescription",
  "stateIcon": "ContactModal-module__F-JUqG__stateIcon",
  "stateIconImg": "ContactModal-module__F-JUqG__stateIconImg",
  "stateTitle": "ContactModal-module__F-JUqG__stateTitle",
  "stateTitleEmphasis": "ContactModal-module__F-JUqG__stateTitleEmphasis",
  "submitArrow": "ContactModal-module__F-JUqG__submitArrow",
  "submitBlock": "ContactModal-module__F-JUqG__submitBlock",
  "submitButton": "ContactModal-module__F-JUqG__submitButton",
  "submitCaption": "ContactModal-module__F-JUqG__submitCaption",
  "submitRowBlock": "ContactModal-module__F-JUqG__submitRowBlock",
  "subtitle": "ContactModal-module__F-JUqG__subtitle",
  "textarea": "ContactModal-module__F-JUqG__textarea",
  "title": "ContactModal-module__F-JUqG__title",
  "titleEmphasis": "ContactModal-module__F-JUqG__titleEmphasis",
  "treeImg": "ContactModal-module__F-JUqG__treeImg",
  "uploadArea": "ContactModal-module__F-JUqG__uploadArea",
  "uploadDesc": "ContactModal-module__F-JUqG__uploadDesc",
  "uploadIcon": "ContactModal-module__F-JUqG__uploadIcon",
  "uploadIconImg": "ContactModal-module__F-JUqG__uploadIconImg",
  "uploadTextCol": "ContactModal-module__F-JUqG__uploadTextCol",
  "uploadTitle": "ContactModal-module__F-JUqG__uploadTitle",
});
}),
"[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ContactModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/ThePeachStudio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/ThePeachStudio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/ThePeachStudio/src/utils/paths.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const TREE_ILLUSTRATION_URL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/contact/tree-illustration.png");
const CLOSE_ICON_URL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/contact/close-icon.svg");
const UPLOAD_ICON_URL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/contact/upload-icon.svg");
const SUBMIT_ARROW_URL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/contact/submit-arrow.svg");
const PHONE_ICON_URL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/contact/phone-icon.svg");
const EMAIL_ICON_URL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/contact/email-icon.svg");
const RADIO_CHECKED_URL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/contact/radio-checked.png");
const RADIO_UNCHECKED_URL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/contact/radio-unchecked.png");
const SUCCESS_ICON_URL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/contact/success-icon.png");
const ERROR_ICON_URL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/contact/error-icon.png");
function ContactModal({ isOpen, onClose }) {
    _s();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        email: "",
        phone: "",
        role: "professional",
        message: ""
    });
    const [selectedFile, setSelectedFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [formState, setFormState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("idle");
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const validate = ()=>{
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Your Name is required.";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address.";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const handleChange = (e)=>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        if (errors[e.target.name]) {
            setErrors({
                ...errors,
                [e.target.name]: ""
            });
        }
    };
    const handleRoleSelect = (role)=>{
        setFormData({
            ...formData,
            role
        });
    };
    const handleFileChange = (e)=>{
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            if (file.size > 10 * 1024 * 1024) {
                setErrors({
                    ...errors,
                    file: "File size exceeds 10MB limit."
                });
            } else {
                setSelectedFile(file);
                setErrors({
                    ...errors,
                    file: ""
                });
            }
        }
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (validate()) {
            setFormState("submitting");
            // Simulate form submission delay
            setTimeout(()=>{
                if (formData.email.toLowerCase() === "error@thepeachstudio.com") {
                    setFormState("error");
                } else {
                    setFormState("success");
                }
            }, 300);
        }
    };
    const handleReset = ()=>{
        setFormData({
            name: "",
            email: "",
            phone: "",
            role: "professional",
            message: ""
        });
        setSelectedFile(null);
        setErrors({});
        setFormState("idle");
    };
    const triggerClose = ()=>{
        onClose();
        setTimeout(()=>{
            handleReset();
        }, 400);
    };
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalOverlay} ${isOpen ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].overlayActive : ""}`,
        onClick: triggerClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalCard,
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: TREE_ILLUSTRATION_URL,
                    alt: "Majestic tree sketch",
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].treeImg
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                    lineNumber: 132,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].closeButton,
                    onClick: triggerClose,
                    "aria-label": "Close form modal",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: CLOSE_ICON_URL,
                        alt: "Close button mark",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].closeIconImg
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                        lineNumber: 136,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                    lineNumber: 135,
                    columnNumber: 9
                }, this),
                (formState === "idle" || formState === "submitting") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                            children: [
                                "Let's make a ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].titleEmphasis,
                                    children: "story together"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                    lineNumber: 143,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                            lineNumber: 142,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].subtitle,
                            children: "Tell us what you're dreaming up. We'll help shape the rest."
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                            lineNumber: 145,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                    lineNumber: 141,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formContainer,
                    children: formState === "idle" || formState === "submitting" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        id: "contactForm",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].form,
                        onSubmit: handleSubmit,
                        noValidate: true,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].nameRow,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].nameFormGroup,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "name",
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                                            children: "Your Name"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                            lineNumber: 159,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            id: "name",
                                            name: "name",
                                            value: formData.name,
                                            onChange: handleChange,
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input,
                                            disabled: formState === "submitting"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                            lineNumber: 160,
                                            columnNumber: 19
                                        }, this),
                                        errors.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].errorText,
                                            children: errors.name
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                            lineNumber: 169,
                                            columnNumber: 35
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                    lineNumber: 158,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                lineNumber: 157,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].rowInputsContainer,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].rowInputs,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formGroup,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "email",
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                                                    children: "Email"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                                    lineNumber: 177,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "email",
                                                    id: "email",
                                                    name: "email",
                                                    value: formData.email,
                                                    onChange: handleChange,
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input,
                                                    disabled: formState === "submitting"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                                    lineNumber: 178,
                                                    columnNumber: 21
                                                }, this),
                                                errors.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].errorText,
                                                    children: errors.email
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                                    lineNumber: 187,
                                                    columnNumber: 38
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                            lineNumber: 176,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formGroup,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "phone",
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                                                    children: "Phone Number (optional)"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                                    lineNumber: 191,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "tel",
                                                    id: "phone",
                                                    name: "phone",
                                                    value: formData.phone,
                                                    onChange: handleChange,
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input,
                                                    disabled: formState === "submitting"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                                    lineNumber: 192,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                            lineNumber: 190,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                    lineNumber: 175,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                lineNumber: 174,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].roleInputsContainer,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formGroup,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                                            children: "You are a..."
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                            lineNumber: 208,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].radioContainer,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].radioCard} ${formData.role === "professional" ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].radioCardActive : ""}`,
                                                    onClick: ()=>formState !== "submitting" && handleRoleSelect("professional"),
                                                    role: "button",
                                                    tabIndex: 0,
                                                    onKeyDown: (e)=>{
                                                        if (e.key === "Enter" || e.key === " ") {
                                                            e.preventDefault();
                                                            if (formState !== "submitting") {
                                                                handleRoleSelect("professional");
                                                            }
                                                        }
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].radioIconContainer,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                src: formData.role === "professional" ? RADIO_CHECKED_URL : RADIO_UNCHECKED_URL,
                                                                alt: "",
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].radioIcon
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                                                lineNumber: 227,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                                            lineNumber: 226,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].radioContent,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].radioTitle,
                                                                    children: "Professional"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                                                    lineNumber: 234,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].radioDesc,
                                                                    children: "Architect, interior designer, or business owner"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                                                    lineNumber: 235,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                                            lineNumber: 233,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                                    lineNumber: 212,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].radioCard} ${formData.role === "homeowner" ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].radioCardActive : ""}`,
                                                    onClick: ()=>formState !== "submitting" && handleRoleSelect("homeowner"),
                                                    role: "button",
                                                    tabIndex: 0,
                                                    onKeyDown: (e)=>{
                                                        if (e.key === "Enter" || e.key === " ") {
                                                            e.preventDefault();
                                                            if (formState !== "submitting") {
                                                                handleRoleSelect("homeowner");
                                                            }
                                                        }
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].radioIconContainer,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                src: formData.role === "homeowner" ? RADIO_CHECKED_URL : RADIO_UNCHECKED_URL,
                                                                alt: "",
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].radioIcon
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                                                lineNumber: 255,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                                            lineNumber: 254,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].radioContent,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].radioTitle,
                                                                    children: "Homeowner"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                                                    lineNumber: 262,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].radioDesc,
                                                                    children: "Looking to bring a story into your home."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                                                    lineNumber: 263,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                                            lineNumber: 261,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                                    lineNumber: 240,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                            lineNumber: 209,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                    lineNumber: 207,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                lineNumber: 206,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formGroup,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "message",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                                        children: "Share what you’re imagining"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                        lineNumber: 273,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        id: "message",
                                        name: "message",
                                        value: formData.message,
                                        onChange: handleChange,
                                        placeholder: "Tell us about the space, the story, or anything else that feels important.",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].textarea,
                                        disabled: formState === "submitting"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                        lineNumber: 274,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                lineNumber: 272,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formGroup,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                                        children: "Share a few visual references (optional)"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                        lineNumber: 287,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].uploadArea,
                                        onClick: ()=>fileInputRef.current?.click(),
                                        role: "button",
                                        tabIndex: 0,
                                        onKeyDown: (e)=>{
                                            if (e.key === "Enter" || e.key === " ") {
                                                e.preventDefault();
                                                fileInputRef.current?.click();
                                            }
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].uploadIcon,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: UPLOAD_ICON_URL,
                                                    alt: "Upload logo mark",
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].uploadIconImg
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                                    lineNumber: 301,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                                lineNumber: 300,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].uploadTextCol,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].uploadTitle,
                                                        children: "Photos, sketches, moodboards, floor plans, etc"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                                        lineNumber: 304,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].uploadDesc,
                                                        children: "Up to 4 files · JPG, PNG, PDF · Max 10 MB each"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                                        lineNumber: 305,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                                lineNumber: 303,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "file",
                                                ref: fileInputRef,
                                                onChange: handleFileChange,
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hiddenFileInput,
                                                accept: ".jpg,.jpeg,.png,.pdf",
                                                disabled: formState === "submitting",
                                                "aria-label": "Upload visual references file"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                                lineNumber: 307,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                        lineNumber: 288,
                                        columnNumber: 17
                                    }, this),
                                    selectedFile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fileSelectedBadge,
                                        children: [
                                            "✓ ",
                                            selectedFile.name,
                                            " (",
                                            (selectedFile.size / (1024 * 1024)).toFixed(2),
                                            " MB)"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                        lineNumber: 318,
                                        columnNumber: 19
                                    }, this),
                                    errors.file && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].errorText,
                                        children: errors.file
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                        lineNumber: 322,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                lineNumber: 286,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                        lineNumber: 154,
                        columnNumber: 13
                    }, this) : formState === "success" ? /* Success confirmation card screen */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stateContainer,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stateIcon,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: SUCCESS_ICON_URL,
                                    alt: "",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stateIconImg
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                    lineNumber: 330,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                lineNumber: 329,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stateTitle,
                                children: [
                                    "Thank you for sharing ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stateTitleEmphasis,
                                        children: "your story!"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                        lineNumber: 333,
                                        columnNumber: 39
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                lineNumber: 332,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stateDescription,
                                children: "We will review your project brief carefully and get back to you soon."
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                lineNumber: 335,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stateButton,
                                onClick: triggerClose,
                                children: "Back to Home"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                lineNumber: 338,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                        lineNumber: 328,
                        columnNumber: 13
                    }, this) : /* Error confirmation card screen */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stateContainer,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stateIcon,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: ERROR_ICON_URL,
                                    alt: "",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stateIconImg
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                    lineNumber: 346,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                lineNumber: 345,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stateTitle,
                                children: "Hmm, your story didn't reach us :("
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                lineNumber: 348,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stateDescription,
                                children: "Something interrupted the submission. Please try again."
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                lineNumber: 349,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stateButton,
                                onClick: handleReset,
                                children: "Try Again"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                lineNumber: 352,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                        lineNumber: 344,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                    lineNumber: 152,
                    columnNumber: 9
                }, this),
                (formState === "idle" || formState === "submitting") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].submitBlock,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            form: "contactForm",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].submitButton,
                            disabled: formState === "submitting",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: formState === "submitting" ? "Submitting..." : "Submit"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                    lineNumber: 368,
                                    columnNumber: 15
                                }, this),
                                formState !== "submitting" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: SUBMIT_ARROW_URL,
                                    alt: "Submit Arrow",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].submitArrow
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                    lineNumber: 370,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                            lineNumber: 362,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].submitCaption,
                            children: "We'll review your brief and get back to you."
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                            lineNumber: 373,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                    lineNumber: 361,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].divider
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                    lineNumber: 378,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].directContacts,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].directTitle,
                            children: "or get in touch directly"
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                            lineNumber: 382,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].directRow,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "tel:+919217689001",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].directLinkCard,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].directIcon,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: PHONE_ICON_URL,
                                                alt: "Phone link logo",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].directIconImg
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                                lineNumber: 388,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                            lineNumber: 387,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].directTextCol,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].directValue,
                                                    children: "+91 92176 89001"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                                    lineNumber: 391,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].directCaption,
                                                    children: "Fastest."
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                                    lineNumber: 392,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                            lineNumber: 390,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                    lineNumber: 386,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "mailto:poorva.kelkar@gmail.com",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].directLinkCard,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].directIcon,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: EMAIL_ICON_URL,
                                                alt: "Email link logo",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].directIconImg
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                                lineNumber: 399,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                            lineNumber: 398,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].directTextCol,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].directValue,
                                                    children: "poorva.kelkar@gmail.com"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                                    lineNumber: 402,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].directCaption,
                                                    children: "Most Common."
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                                    lineNumber: 403,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                            lineNumber: 401,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                    lineNumber: 397,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                            lineNumber: 384,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                    lineNumber: 381,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
            lineNumber: 129,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
        lineNumber: 128,
        columnNumber: 5
    }, this);
}
_s(ContactModal, "CD648C1OP6BAqUArDr5/Rj40UEM=");
_c = ContactModal;
var _c;
__turbopack_context__.k.register(_c, "ContactModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/GitHub/ThePeachStudio/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/ThePeachStudio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/ThePeachStudio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$SplashIntro$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/ThePeachStudio/src/components/SplashIntro.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function Home() {
    _s();
    const [currentStep, setCurrentStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("splash");
    const [isExitingSplash, setIsExitingSplash] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isContactOpen, setIsContactOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleGetStarted = ()=>{
        setIsExitingSplash(true);
        setTimeout(()=>{
            setCurrentStep("landing");
        }, 800); // 800ms matches the slow transition in CSS
    };
    const handleStartConversation = ()=>{
        setIsContactOpen(true);
    };
    const handleCloseConversation = ()=>{
        setIsContactOpen(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: currentStep === "splash" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$SplashIntro$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            onGetStarted: handleGetStarted,
            isExiting: isExitingSplash
        }, void 0, false, {
            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/app/page.tsx",
            lineNumber: 31,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    onStartConversation: handleStartConversation
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/app/page.tsx",
                    lineNumber: 34,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    isOpen: isContactOpen,
                    onClose: handleCloseConversation
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/app/page.tsx",
                    lineNumber: 35,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true)
    }, void 0, false);
}
_s(Home, "dELsqlVvRYXpvzJKzg/65LKoRG8=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_GitHub_ThePeachStudio_src_1w-9i_j._.js.map