module.exports = [
"[project]/Documents/GitHub/ThePeachStudio/src/components/SplashIntro.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

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
"[project]/Documents/GitHub/ThePeachStudio/src/components/SplashIntro.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SplashIntro
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/ThePeachStudio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/ThePeachStudio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$SplashIntro$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/ThePeachStudio/src/components/SplashIntro.module.css [app-ssr] (css module)");
"use client";
;
;
;
const SPLASH_IMAGES = [
    "/images/splash/image1.png",
    "/images/splash/image2.png",
    "/images/splash/image3.png",
    "/images/splash/image4.png"
];
const LOGO_ICON_URL = "/images/splash/logo-icon.svg"; // Component 25 (peach icon)
const LOGO_WORDMARK_URL = "/images/splash/logo-wordmark.svg"; // Wordmark (the peach studio.)
const PAINTBRUSH_ICON_URL = "/images/splash/paintbrush-icon.png"; // Paintbrush icon
function SplashIntro({ onGetStarted, isExiting }) {
    // Initialize with the first image to allow synchronous rendering (crucial for SSR match and unit tests)
    const [bgImage, setBgImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(SPLASH_IMAGES[0]);
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [cursorPos, setCursorPos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        x: -100,
        y: -100
    });
    const [isHovering, setIsHovering] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isClicking, setIsClicking] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isFullyRevealed, setIsFullyRevealed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const strokeCountRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Choose a random splash background image with reload-guarantee on mount
        const prevIndexStr = localStorage.getItem("peach_studio_last_splash_index");
        let nextIndex = Math.floor(Math.random() * SPLASH_IMAGES.length);
        if (prevIndexStr !== null) {
            const prevIndex = parseInt(prevIndexStr, 10);
            if (SPLASH_IMAGES.length > 1) {
                while(nextIndex === prevIndex){
                    nextIndex = Math.floor(Math.random() * SPLASH_IMAGES.length);
                }
            }
        }
        localStorage.setItem("peach_studio_last_splash_index", nextIndex.toString());
        // Defer the state update to satisfy eslint rule against synchronous setStates inside effects
        const timer = setTimeout(()=>{
            setBgImage(SPLASH_IMAGES[nextIndex]);
        }, 0);
        return ()=>clearTimeout(timer);
    }, []);
    // Initialize and resize canvas
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        const resizeCanvas = ()=>{
            // Setup high-DPI scaling if needed, or normal scale for simple eraser paths
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            // Fill with brand canvas color `#e7e4dd` from Figma
            ctx.fillStyle = "#e7e4dd";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        };
        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);
        return ()=>window.removeEventListener("resize", resizeCanvas);
    }, []); // Initialize canvas overlay once on mount
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
            if (ratio >= 0.5) {
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
        const brushRadius = 70;
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
    // Mouse move drawing and cursor tracing
    const handleMouseMove = (e)=>{
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
        setIsHovering(false);
    };
    const handleMouseDown = ()=>{
        setIsClicking(true);
    };
    const handleMouseUp = ()=>{
        setIsClicking(false);
    };
    // Touch device drawing support (mobile layout swipe reveal)
    const handleTouchStart = (e)=>{
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
        if (e.touches && e.touches[0]) {
            const touch = e.touches[0];
            const rect = e.currentTarget.getBoundingClientRect();
            const x = touch.clientX - rect.left;
            const y = touch.clientY - rect.top;
            // Paint on touch move
            revealAt(x, y);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$SplashIntro$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].splashScreen} ${isExiting ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$SplashIntro$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].fadeOut : ""}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: bgImage,
                alt: "The Peach Studio Background Painting",
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$SplashIntro$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].bgImage
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/SplashIntro.tsx",
                lineNumber: 203,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$SplashIntro$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].paintCanvas} ${isFullyRevealed ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$SplashIntro$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].canvasHidden : ""}`,
                onMouseMove: handleMouseMove,
                onMouseEnter: handleMouseEnter,
                onMouseLeave: handleMouseLeave,
                onMouseDown: handleMouseDown,
                onMouseUp: handleMouseUp,
                onTouchStart: handleTouchStart,
                onTouchMove: handleTouchMove
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/SplashIntro.tsx",
                lineNumber: 206,
                columnNumber: 7
            }, this),
            isHovering && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$SplashIntro$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].customCursor} ${isClicking ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$SplashIntro$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].customCursorActive : ""}`,
                style: {
                    left: `${cursorPos.x}px`,
                    top: `${cursorPos.y}px`
                }
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/SplashIntro.tsx",
                lineNumber: 220,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$SplashIntro$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].hoverToUnveil} ${isFullyRevealed ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$SplashIntro$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].badgeHidden : ""}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$SplashIntro$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].paintbrushIcon,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: PAINTBRUSH_ICON_URL,
                            alt: "Paintbrush Icon",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$SplashIntro$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].paintbrushImg
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/SplashIntro.tsx",
                            lineNumber: 229,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/SplashIntro.tsx",
                        lineNumber: 228,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$SplashIntro$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].hoverText,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$SplashIntro$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].desktopOnly,
                                children: "hover to unveil"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/SplashIntro.tsx",
                                lineNumber: 232,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$SplashIntro$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].mobileOnly,
                                children: "scratch to unveil"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/SplashIntro.tsx",
                                lineNumber: 233,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/SplashIntro.tsx",
                        lineNumber: 231,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/SplashIntro.tsx",
                lineNumber: 227,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$SplashIntro$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].centerLogo} ${isFullyRevealed ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$SplashIntro$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].fadeOutLogo : ""}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$SplashIntro$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].centerIcon,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: LOGO_ICON_URL,
                            alt: "Peach Icon",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$SplashIntro$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].logoIconImg
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/SplashIntro.tsx",
                            lineNumber: 240,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/SplashIntro.tsx",
                        lineNumber: 239,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$SplashIntro$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].centerWordmark,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: LOGO_WORDMARK_URL,
                            alt: "the peach studio",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$SplashIntro$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].logoWordmarkImg
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/SplashIntro.tsx",
                            lineNumber: 243,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/SplashIntro.tsx",
                        lineNumber: 242,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/SplashIntro.tsx",
                lineNumber: 238,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$SplashIntro$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].topLeftLogo} ${isFullyRevealed ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$SplashIntro$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].fadeInLogo : ""}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$SplashIntro$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].topLeftIcon,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: LOGO_ICON_URL,
                            alt: "Peach Icon",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$SplashIntro$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].logoIconImg
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/SplashIntro.tsx",
                            lineNumber: 250,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/SplashIntro.tsx",
                        lineNumber: 249,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$SplashIntro$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].topLeftWordmark,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: LOGO_WORDMARK_URL,
                            alt: "the peach studio",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$SplashIntro$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].logoWordmarkImg
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/SplashIntro.tsx",
                            lineNumber: 253,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/SplashIntro.tsx",
                        lineNumber: 252,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/SplashIntro.tsx",
                lineNumber: 248,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$SplashIntro$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].getStartedContainer,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$SplashIntro$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].getStartedBtn,
                    onClick: onGetStarted,
                    children: "Get Started"
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/SplashIntro.tsx",
                    lineNumber: 259,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/SplashIntro.tsx",
                lineNumber: 258,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/SplashIntro.tsx",
        lineNumber: 201,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "breatheLeft": "MainLanding-module__-4B6pq__breatheLeft",
  "breatheRight": "MainLanding-module__-4B6pq__breatheRight",
  "centerIcon": "MainLanding-module__-4B6pq__centerIcon",
  "centerIconImg": "MainLanding-module__-4B6pq__centerIconImg",
  "comingSoonBadge": "MainLanding-module__-4B6pq__comingSoonBadge",
  "contactEmail": "MainLanding-module__-4B6pq__contactEmail",
  "contactLabel": "MainLanding-module__-4B6pq__contactLabel",
  "contactPhone": "MainLanding-module__-4B6pq__contactPhone",
  "contacts": "MainLanding-module__-4B6pq__contacts",
  "copyrightRow": "MainLanding-module__-4B6pq__copyrightRow",
  "cropBox": "MainLanding-module__-4B6pq__cropBox",
  "ctaButton": "MainLanding-module__-4B6pq__ctaButton",
  "description": "MainLanding-module__-4B6pq__description",
  "flowerLeftContainer": "MainLanding-module__-4B6pq__flowerLeftContainer",
  "flowerLeftImg": "MainLanding-module__-4B6pq__flowerLeftImg",
  "flowerRightBox": "MainLanding-module__-4B6pq__flowerRightBox",
  "flowerRightContainer": "MainLanding-module__-4B6pq__flowerRightContainer",
  "flowerRightImg": "MainLanding-module__-4B6pq__flowerRightImg",
  "footer": "MainLanding-module__-4B6pq__footer",
  "footerLogo": "MainLanding-module__-4B6pq__footerLogo",
  "footerRow": "MainLanding-module__-4B6pq__footerRow",
  "landingContainer": "MainLanding-module__-4B6pq__landingContainer",
  "mainContent": "MainLanding-module__-4B6pq__mainContent",
  "rotateContainer": "MainLanding-module__-4B6pq__rotateContainer",
  "socialBg": "MainLanding-module__-4B6pq__socialBg",
  "socialIcon": "MainLanding-module__-4B6pq__socialIcon",
  "socialLink": "MainLanding-module__-4B6pq__socialLink",
  "socials": "MainLanding-module__-4B6pq__socials",
  "subDescription": "MainLanding-module__-4B6pq__subDescription",
  "tagline": "MainLanding-module__-4B6pq__tagline",
  "taglineEmphasis": "MainLanding-module__-4B6pq__taglineEmphasis",
});
}),
"[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MainLanding
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/ThePeachStudio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.module.css [app-ssr] (css module)");
"use client";
;
;
const PINK_FLOWER_URL = "/images/landing/pink-flower.png";
const FOOTER_LOGO_URL = "/images/landing/footer-logo.svg";
const CENTER_ICON_URL = "/images/landing/center-icon.svg";
function MainLanding({ onStartConversation }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].landingContainer,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].flowerLeftContainer,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cropBox,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: PINK_FLOWER_URL,
                        alt: "Watercolor Pink Flower Left",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].flowerLeftImg
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                        lineNumber: 20,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].flowerRightContainer,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].rotateContainer,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].flowerRightBox,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cropBox,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: PINK_FLOWER_URL,
                                alt: "Watercolor Pink Flower Right",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].flowerRightImg
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                lineNumber: 29,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                            lineNumber: 28,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                        lineNumber: 27,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].mainContent,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].centerIcon,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: CENTER_ICON_URL,
                            alt: "Peach Studio Mark",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].centerIconImg
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].comingSoonBadge,
                        children: "Coming Soon"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tagline,
                        children: [
                            "We’re building our story",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].taglineEmphasis,
                                children: "..."
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                lineNumber: 47,
                                columnNumber: 35
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].description,
                        children: "Our website is taking shape behind the scenes"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].subDescription,
                        children: "In the meantime, we'd love to hear about your project..."
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].ctaButton,
                        onClick: onStartConversation,
                        children: "Start a Conversation"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].footer,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].footerRow,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].socials,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://www.linkedin.com/company/the-peach-studio-in/about/",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].socialLink,
                                        "aria-label": "LinkedIn Profile",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: "/images/landing/linkedin-bg.svg",
                                                alt: "",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].socialBg
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                                lineNumber: 77,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: "/images/landing/linkedin-vec.svg",
                                                alt: "LinkedIn Logo",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].socialIcon
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                                lineNumber: 78,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                        lineNumber: 70,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://www.instagram.com/thepeachstudio.in/",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].socialLink,
                                        "aria-label": "Instagram Profile",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: "/images/landing/instagram-bg.svg",
                                                alt: "",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].socialBg
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                                lineNumber: 88,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: "/images/landing/instagram-vec.svg",
                                                alt: "Instagram Logo",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].socialIcon
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                                lineNumber: 89,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                        lineNumber: 81,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: FOOTER_LOGO_URL,
                                alt: "the peach studio",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].footerLogo
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                lineNumber: 94,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].contacts,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].contactLabel,
                                        children: "Let’s get in touch"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                        lineNumber: 98,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "mailto:poorva.kelkar@gmail.com",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].contactEmail,
                                        children: "poorva.kelkar@gmail.com"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                        lineNumber: 99,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "tel:+919217689001",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].contactPhone,
                                        children: "+91 92176 89001"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                        lineNumber: 102,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                lineNumber: 97,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].copyrightRow,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "© 2026 The Peach Studio | All rights reserved"
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                            lineNumber: 110,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

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
  "rowInputs": "ContactModal-module__F-JUqG__rowInputs",
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
"[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ContactModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/ThePeachStudio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/ThePeachStudio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.module.css [app-ssr] (css module)");
"use client";
;
;
;
const TREE_ILLUSTRATION_URL = "/images/contact/tree-illustration.png";
const CLOSE_ICON_URL = "/images/contact/close-icon.svg";
const UPLOAD_ICON_URL = "/images/contact/upload-icon.svg";
const SUBMIT_ARROW_URL = "/images/contact/submit-arrow.svg";
const PHONE_ICON_URL = "/images/contact/phone-icon.svg";
const EMAIL_ICON_URL = "/images/contact/email-icon.svg";
function ContactModal({ isOpen, onClose }) {
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        email: "",
        phone: "",
        role: "professional",
        message: ""
    });
    const [selectedFile, setSelectedFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [formState, setFormState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("idle");
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalOverlay} ${isOpen ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].overlayActive : ""}`,
        onClick: triggerClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modalCard,
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: TREE_ILLUSTRATION_URL,
                    alt: "Majestic tree sketch",
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].treeImg
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                    lineNumber: 127,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].closeButton,
                    onClick: triggerClose,
                    "aria-label": "Close form modal",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: CLOSE_ICON_URL,
                        alt: "Close button mark",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].closeIconImg
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                        lineNumber: 131,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                    lineNumber: 130,
                    columnNumber: 9
                }, this),
                (formState === "idle" || formState === "submitting") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].header,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title,
                            children: [
                                "Let's make a ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].titleEmphasis,
                                    children: "story together"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                    lineNumber: 138,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                            lineNumber: 137,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].subtitle,
                            children: "Tell us what you're dreaming up. We'll help shape the rest."
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                            lineNumber: 140,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                    lineNumber: 136,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].formContainer,
                    children: [
                        formState === "idle" || formState === "submitting" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].form,
                            onSubmit: handleSubmit,
                            noValidate: true,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].nameRow,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].nameFormGroup,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "name",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].label,
                                                children: "Your Name"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                                lineNumber: 154,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                id: "name",
                                                name: "name",
                                                value: formData.name,
                                                onChange: handleChange,
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].input,
                                                disabled: formState === "submitting"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                                lineNumber: 155,
                                                columnNumber: 19
                                            }, this),
                                            errors.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].errorText,
                                                children: errors.name
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                                lineNumber: 164,
                                                columnNumber: 35
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                        lineNumber: 153,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                    lineNumber: 152,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].rowInputs,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].formGroup,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "email",
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].label,
                                                    children: "Email"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                                    lineNumber: 171,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "email",
                                                    id: "email",
                                                    name: "email",
                                                    value: formData.email,
                                                    onChange: handleChange,
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].input,
                                                    disabled: formState === "submitting"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                                    lineNumber: 172,
                                                    columnNumber: 19
                                                }, this),
                                                errors.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].errorText,
                                                    children: errors.email
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                                    lineNumber: 181,
                                                    columnNumber: 36
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                            lineNumber: 170,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].formGroup,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "phone",
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].label,
                                                    children: "Phone Number (optional)"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                                    lineNumber: 185,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "tel",
                                                    id: "phone",
                                                    name: "phone",
                                                    value: formData.phone,
                                                    onChange: handleChange,
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].input,
                                                    disabled: formState === "submitting"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                                    lineNumber: 186,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                            lineNumber: 184,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                    lineNumber: 169,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].formGroup,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].label,
                                            children: "You are a..."
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                            lineNumber: 200,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].radioContainer,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].radioCard} ${formData.role === "professional" ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].radioCardActive : ""}`,
                                                    onClick: ()=>formState !== "submitting" && handleRoleSelect("professional"),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].radioIconContainer,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                src: formData.role === "professional" ? "/images/contact/radio-checked.png" : "/images/contact/radio-unchecked.png",
                                                                alt: "",
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].radioIcon
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                                                lineNumber: 207,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                                            lineNumber: 206,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].radioContent,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].radioTitle,
                                                                    children: "Professional"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                                                    lineNumber: 214,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].radioDesc,
                                                                    children: "Architect, interior designer, or business owner"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                                                    lineNumber: 215,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                                            lineNumber: 213,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                                    lineNumber: 202,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].radioCard} ${formData.role === "homeowner" ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].radioCardActive : ""}`,
                                                    onClick: ()=>formState !== "submitting" && handleRoleSelect("homeowner"),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].radioIconContainer,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                src: formData.role === "homeowner" ? "/images/contact/radio-checked.png" : "/images/contact/radio-unchecked.png",
                                                                alt: "",
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].radioIcon
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                                                lineNumber: 224,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                                            lineNumber: 223,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].radioContent,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].radioTitle,
                                                                    children: "Homeowner"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                                                    lineNumber: 231,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].radioDesc,
                                                                    children: "Looking to bring a story into your home."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                                                    lineNumber: 232,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                                            lineNumber: 230,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                                    lineNumber: 219,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                            lineNumber: 201,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                    lineNumber: 199,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].formGroup,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "message",
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].label,
                                            children: "Share what you’re imagining"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                            lineNumber: 240,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            id: "message",
                                            name: "message",
                                            value: formData.message,
                                            onChange: handleChange,
                                            placeholder: "Tell us about the space, the story, or anything else that feels important.",
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].textarea,
                                            disabled: formState === "submitting"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                            lineNumber: 241,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                    lineNumber: 239,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].formGroup,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].label,
                                            children: "Share a few visual references (optional)"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                            lineNumber: 254,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].uploadArea,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].uploadIcon,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: UPLOAD_ICON_URL,
                                                        alt: "Upload logo mark",
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].uploadIconImg
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                                        lineNumber: 257,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                                    lineNumber: 256,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].uploadTextCol,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].uploadTitle,
                                                            children: "Photos, sketches, moodboards, floor plans, etc"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                                            lineNumber: 260,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].uploadDesc,
                                                            children: "Up to 4 images · JPG, PNG, PDF · Max 10 MB each"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                                            lineNumber: 261,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                                    lineNumber: 259,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "file",
                                                    ref: fileInputRef,
                                                    onChange: handleFileChange,
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].hiddenFileInput,
                                                    accept: ".jpg,.jpeg,.png,.pdf",
                                                    disabled: formState === "submitting",
                                                    "aria-label": "Upload visual references file"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                                    lineNumber: 263,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                            lineNumber: 255,
                                            columnNumber: 17
                                        }, this),
                                        selectedFile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].fileSelectedBadge,
                                            children: [
                                                "✓ ",
                                                selectedFile.name,
                                                " (",
                                                (selectedFile.size / (1024 * 1024)).toFixed(2),
                                                " MB)"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                            lineNumber: 274,
                                            columnNumber: 19
                                        }, this),
                                        errors.file && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].errorText,
                                            children: errors.file
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                            lineNumber: 278,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                    lineNumber: 253,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].submitBlock,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].submitButton,
                                            disabled: formState === "submitting",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: formState === "submitting" ? "Submitting..." : "Submit"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                                    lineNumber: 288,
                                                    columnNumber: 19
                                                }, this),
                                                formState !== "submitting" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: SUBMIT_ARROW_URL,
                                                    alt: "Submit Arrow",
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].submitArrow
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                                    lineNumber: 290,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                            lineNumber: 283,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].submitCaption,
                                            children: "We'll review your brief and get back to you."
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                            lineNumber: 293,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                    lineNumber: 282,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                            lineNumber: 149,
                            columnNumber: 13
                        }, this) : formState === "success" ? /* Success confirmation card screen */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stateContainer,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stateIcon,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/images/contact/success-icon.png",
                                        alt: "",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stateIconImg
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                        lineNumber: 301,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                    lineNumber: 300,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stateTitle,
                                    children: [
                                        "Thank you for sharing ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stateTitleEmphasis,
                                            children: "your story!"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                            lineNumber: 304,
                                            columnNumber: 39
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                    lineNumber: 303,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stateDescription,
                                    children: "We will review your project brief carefully and get back to you soon."
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                    lineNumber: 306,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stateButton,
                                    onClick: triggerClose,
                                    children: "Back to Home"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                    lineNumber: 309,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                            lineNumber: 299,
                            columnNumber: 13
                        }, this) : /* Error confirmation card screen */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stateContainer,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stateIcon,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/images/contact/error-icon.png",
                                        alt: "",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stateIconImg
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                        lineNumber: 317,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                    lineNumber: 316,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stateTitle,
                                    children: "Hmm, your story didn't reach us :("
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                    lineNumber: 319,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stateDescription,
                                    children: "Something interrupted the submission. Please try again."
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                    lineNumber: 320,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stateButton,
                                    onClick: handleReset,
                                    children: "Try Again"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                    lineNumber: 323,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                            lineNumber: 315,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].divider
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                            lineNumber: 330,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].directContacts,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].directTitle,
                                    children: "or get in touch directly"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                    lineNumber: 334,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].directRow,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "tel:+919217689001",
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].directLinkCard,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].directIcon,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: PHONE_ICON_URL,
                                                        alt: "Phone link logo",
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].directIconImg
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                                        lineNumber: 340,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                                    lineNumber: 339,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].directTextCol,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].directValue,
                                                            children: "+91 92176 89001"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                                            lineNumber: 343,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].directCaption,
                                                            children: "Fastest."
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                                            lineNumber: 344,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                                    lineNumber: 342,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                            lineNumber: 338,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "mailto:poorva.kelkar@gmail.com",
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].directLinkCard,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].directIcon,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: EMAIL_ICON_URL,
                                                        alt: "Email link logo",
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].directIconImg
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                                        lineNumber: 351,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                                    lineNumber: 350,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].directTextCol,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].directValue,
                                                            children: "poorva.kelkar@gmail.com"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                                            lineNumber: 354,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].directCaption,
                                                            children: "Most Common."
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                                            lineNumber: 355,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                                    lineNumber: 353,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                            lineNumber: 349,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                    lineNumber: 336,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                            lineNumber: 333,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                    lineNumber: 147,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
            lineNumber: 124,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
        lineNumber: 123,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/GitHub/ThePeachStudio/src/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/ThePeachStudio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/ThePeachStudio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$SplashIntro$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/ThePeachStudio/src/components/SplashIntro.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function Home() {
    const [currentStep, setCurrentStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("splash");
    const [isExitingSplash, setIsExitingSplash] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isContactOpen, setIsContactOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleGetStarted = ()=>{
        setIsExitingSplash(true);
        // Wait for the exit animation transition (800ms) to complete before switching view
        setTimeout(()=>{
            setCurrentStep("landing");
        }, 800);
    };
    const handleStartConversation = ()=>{
        setIsContactOpen(true);
    };
    const handleCloseConversation = ()=>{
        setIsContactOpen(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: currentStep === "splash" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$SplashIntro$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            onGetStarted: handleGetStarted,
            isExiting: isExitingSplash
        }, void 0, false, {
            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/app/page.tsx",
            lineNumber: 32,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    onStartConversation: handleStartConversation
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/app/page.tsx",
                    lineNumber: 35,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    isOpen: isContactOpen,
                    onClose: handleCloseConversation
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/app/page.tsx",
                    lineNumber: 36,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true)
    }, void 0, false);
}
}),
];

//# sourceMappingURL=Documents_GitHub_ThePeachStudio_src_04khvmh._.js.map