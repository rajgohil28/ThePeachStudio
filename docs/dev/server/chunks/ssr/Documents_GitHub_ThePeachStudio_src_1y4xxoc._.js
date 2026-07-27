module.exports = [
"[project]/Documents/GitHub/ThePeachStudio/src/utils/paths.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
function getAssetPath(path) {
    const basePath = ("TURBOPACK compile-time value", "") || "";
    if (basePath && path.startsWith("/")) //TURBOPACK unreachable
    ;
    return path;
}
}),
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/ThePeachStudio/src/utils/paths.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$SplashIntro$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/ThePeachStudio/src/components/SplashIntro.module.css [app-ssr] (css module)");
"use client";
;
;
;
;
const SPLASH_IMAGES = [
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/splash/image1.png"),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/splash/image2.png"),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/splash/image3.png"),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/splash/image4.png")
];
const LOGO_ICON_URL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/splash/logo-icon.svg"); // Component 25 (peach icon)
const LOGO_WORDMARK_URL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/splash/logo-wordmark.svg"); // Wordmark (the peach studio.)
const PAINTBRUSH_ICON_URL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/splash/paintbrush-icon.png"); // Paintbrush icon
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
    const hasInteracted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
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
        const timer = setTimeout(()=>{
            setBgImage(SPLASH_IMAGES[nextIndex]);
        }, 0);
        return ()=>clearTimeout(timer);
    }, []);
    // Automatically trigger transition to landing page when background is fully revealed
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isFullyRevealed) {
            const timer = setTimeout(()=>{
                onGetStarted();
            }, 1000); // 1-second delay for cinematic finish
            return ()=>clearTimeout(timer);
        }
    }, [
        isFullyRevealed,
        onGetStarted
    ]);
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
            // Fill with semi-transparent brand canvas color `rgba(231, 228, 221, 0.98)` for glassy fog effect
            ctx.fillStyle = "rgba(231, 228, 221, 0.98)";
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
        let animationFrameId;
        const timeoutId = undefined; // 800ms elegant breathing space on initial load
    }, []);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$SplashIntro$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].splashScreen} ${isExiting ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$SplashIntro$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].fadeOut : ""}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: bgImage,
                alt: "The Peach Studio Background Painting",
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$SplashIntro$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].bgImage
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/SplashIntro.tsx",
                lineNumber: 288,
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
                lineNumber: 291,
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
                lineNumber: 305,
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
                            lineNumber: 314,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/SplashIntro.tsx",
                        lineNumber: 313,
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
                                lineNumber: 317,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$SplashIntro$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].mobileOnly,
                                children: "scratch to unveil"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/SplashIntro.tsx",
                                lineNumber: 318,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/SplashIntro.tsx",
                        lineNumber: 316,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/SplashIntro.tsx",
                lineNumber: 312,
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
                            lineNumber: 325,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/SplashIntro.tsx",
                        lineNumber: 324,
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
                            lineNumber: 335,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/SplashIntro.tsx",
                        lineNumber: 334,
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
                            lineNumber: 338,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/SplashIntro.tsx",
                        lineNumber: 337,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/SplashIntro.tsx",
                lineNumber: 333,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/SplashIntro.tsx",
        lineNumber: 286,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "activeRow": "MainLanding-module__-4B6pq__activeRow",
  "authorBox": "MainLanding-module__-4B6pq__authorBox",
  "authorDivider": "MainLanding-module__-4B6pq__authorDivider",
  "authorName": "MainLanding-module__-4B6pq__authorName",
  "authorRole": "MainLanding-module__-4B6pq__authorRole",
  "boldPeach": "MainLanding-module__-4B6pq__boldPeach",
  "card1": "MainLanding-module__-4B6pq__card1",
  "card2": "MainLanding-module__-4B6pq__card2",
  "card3": "MainLanding-module__-4B6pq__card3",
  "card4": "MainLanding-module__-4B6pq__card4",
  "card5": "MainLanding-module__-4B6pq__card5",
  "card6": "MainLanding-module__-4B6pq__card6",
  "card7": "MainLanding-module__-4B6pq__card7",
  "card8": "MainLanding-module__-4B6pq__card8",
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
  "floatingGrid": "MainLanding-module__-4B6pq__floatingGrid",
  "footerBgBox": "MainLanding-module__-4B6pq__footerBgBox",
  "footerBgImg": "MainLanding-module__-4B6pq__footerBgImg",
  "footerContainer": "MainLanding-module__-4B6pq__footerContainer",
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
  "scrollHint": "MainLanding-module__-4B6pq__scrollHint",
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
"[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MainLanding
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/ThePeachStudio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/ThePeachStudio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/ThePeachStudio/src/utils/paths.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.module.css [app-ssr] (css module)");
"use client";
;
;
;
;
// Existing Assets
const PINK_FLOWER_URL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/landing/pink-flower.png");
// Brand logo — true vectors recoloured to the primary peach (#D47059). The
// icon is the peach fruit; the light variants are for the dark footer.
const PEACH_ICON_URL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/landing/peach-icon.svg");
const PEACH_WORDMARK_URL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/landing/peach-wordmark.svg");
const PEACH_ICON_LIGHT_URL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/landing/peach-icon-light.svg");
const PEACH_WORDMARK_LIGHT_URL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/landing/peach-wordmark-light.svg");
const LINKEDIN_BG_URL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/landing/linkedin-bg.svg");
const LINKEDIN_VEC_URL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/landing/linkedin-vec.svg");
const INSTAGRAM_BG_URL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/landing/instagram-bg.svg");
const INSTAGRAM_VEC_URL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/landing/instagram-vec.svg");
// Newly Downloaded High-Fidelity Assets
const MAITREYEE_HEADSHOT = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/landing/maitreyee-headshot.png");
const POORVA_HEADSHOT = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/landing/poorva-headshot.png");
const FOOTER_BG = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/landing/footer-bg.png");
const HERO_FLOATING_1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/landing/hero-floating-1.jpg");
const HERO_FLOATING_2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/landing/hero-floating-2.jpg");
const HERO_FLOATING_3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/landing/hero-floating-3.jpg");
const HERO_FLOATING_4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/landing/hero-floating-4.jpg");
const HERO_FLOATING_5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/landing/hero-floating-5.jpg");
const HERO_FLOATING_6 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/landing/hero-floating-6.jpg");
const HERO_FLOATING_7 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/landing/hero-floating-7.jpg");
const HERO_FLOATING_8 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/landing/hero-floating-8.jpg");
const HERO_ORNAMENT = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/landing/hero-ornament.svg");
const INTRO_SEP_1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/landing/intro-sep-1.svg");
const INTRO_SEP_2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/landing/intro-sep-2.svg");
const QUOTE_ICON = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/landing/quote-icon.svg");
const PROCESS_DECOR_1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/landing/process-decor-1.svg");
const PROCESS_DECOR_2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/landing/process-decor-2.svg");
const PROCESS_DECOR_3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/landing/process-decor-3.svg");
const PROCESS_DECOR_4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/landing/process-decor-4.svg");
const PORTFOLIO_PROJECTS = [
    {
        id: "sealink",
        title: "sealink",
        image: HERO_FLOATING_1
    },
    {
        id: "soul-of-konkan",
        title: "the soul of konkan",
        image: HERO_FLOATING_5
    },
    {
        id: "strategy-meets-space",
        title: "where strategy meets space",
        image: HERO_FLOATING_8
    },
    {
        id: "mumbai-in-pixels",
        title: "mumbai in pixels",
        image: HERO_FLOATING_2
    },
    {
        id: "elephant-mandala",
        title: "the elephant mandala",
        image: HERO_FLOATING_6
    },
    {
        id: "palm-arc",
        title: "under the palm arc",
        image: HERO_FLOATING_3
    },
    {
        id: "bloomspace",
        title: "bloomspace",
        image: HERO_FLOATING_2
    },
    {
        id: "city-threshold",
        title: "a city of every threshold",
        image: HERO_FLOATING_7
    },
    {
        id: "strings-of-sound",
        title: "strings of sound made visible",
        image: HERO_FLOATING_1
    },
    {
        id: "portrait-landscape",
        title: "a portrait of landscape",
        image: HERO_FLOATING_3
    },
    {
        id: "maa-saraswati",
        title: "maa saraswati",
        image: HERO_FLOATING_4
    },
    {
        id: "birdsong-october",
        title: "birdsong in october",
        image: HERO_FLOATING_3
    },
    {
        id: "many-stories",
        title: "many stories, one city!",
        image: HERO_FLOATING_6
    },
    {
        id: "tree-of-life",
        title: "tree of life",
        image: HERO_FLOATING_7
    },
    {
        id: "rituals-adornment",
        title: "rituals of adornment",
        image: HERO_FLOATING_4
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
function MainLanding({ onStartConversation }) {
    const [hoveredProject, setHoveredProject] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const hoveredProjectRef = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(null);
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        hoveredProjectRef.current = hoveredProject;
    }, [
        hoveredProject
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        const handleScroll = ()=>{
            if (("TURBOPACK compile-time value", "undefined") === "undefined" || window.innerWidth > 1024) return;
            //TURBOPACK unreachable
            ;
            const rows = undefined;
            let closestProject;
            let minDistance;
            const viewportCenter = undefined;
        };
        // Initialize on load and resize
        handleScroll();
        window.addEventListener("scroll", handleScroll, {
            passive: true
        });
        window.addEventListener("resize", handleScroll);
        return ()=>{
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].landingContainer,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].heroSection,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].heroWrapper,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].floatingGrid,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].polaroidCard} ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].card1}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: HERO_FLOATING_1,
                                        alt: "Peach Studio Creation",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].polaroidImg
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                        lineNumber: 148,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                    lineNumber: 147,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].polaroidCard} ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].card2}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: HERO_FLOATING_2,
                                        alt: "Studio Sketchwork",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].polaroidImg
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                        lineNumber: 152,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                    lineNumber: 151,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].polaroidCard} ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].card3}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: HERO_FLOATING_3,
                                        alt: "Completed Mural Detail",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].polaroidImg
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                        lineNumber: 156,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                    lineNumber: 155,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].polaroidCard} ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].card4}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: HERO_FLOATING_4,
                                        alt: "Exhibition Artpiece",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].polaroidImg
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                        lineNumber: 160,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                    lineNumber: 159,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].polaroidCard} ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].card5}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: HERO_FLOATING_5,
                                        alt: "Traditional Motif Sketch",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].polaroidImg
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                        lineNumber: 164,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                    lineNumber: 163,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].polaroidCard} ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].card6}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: HERO_FLOATING_6,
                                        alt: "Vibrant Wall Art",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].polaroidImg
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                        lineNumber: 168,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                    lineNumber: 167,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].polaroidCard} ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].card7}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: HERO_FLOATING_7,
                                        alt: "Studio Showcase Detail",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].polaroidImg
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                        lineNumber: 172,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                    lineNumber: 171,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].polaroidCard} ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].card8}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: HERO_FLOATING_8,
                                        alt: "Aesthetic Space Installation",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].polaroidImg
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                        lineNumber: 176,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                    lineNumber: 175,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                            lineNumber: 145,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].heroCore,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].logoAndMark,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: PEACH_ICON_URL,
                                            alt: "",
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].peachIcon
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                            lineNumber: 183,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: PEACH_WORDMARK_URL,
                                            alt: "The Peach Studio",
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].peachWordmark
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                            lineNumber: 184,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                    lineNumber: 182,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].heroHeading,
                                    children: [
                                        "meaningful ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].italicSerif,
                                            children: "art..."
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                            lineNumber: 188,
                                            columnNumber: 26
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                            lineNumber: 189,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].italicSerif,
                                            children: "memorable"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                            lineNumber: 190,
                                            columnNumber: 15
                                        }, this),
                                        " spaces!"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                    lineNumber: 187,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].heroOrnamentRow,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: HERO_ORNAMENT,
                                        alt: "",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].heroOrnament
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                        lineNumber: 194,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                    lineNumber: 193,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                            lineNumber: 181,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                    lineNumber: 143,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                lineNumber: 142,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].visionSection,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].visionBanner,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].visionText,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].boldPeach,
                                children: "The Peach Studio"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                lineNumber: 204,
                                columnNumber: 13
                            }, this),
                            " brings together illustration, murals, installations, and spatial design to create environments that",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].visionWords,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].italicPlay,
                                        children: "inspire"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                        lineNumber: 207,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: INTRO_SEP_1,
                                        alt: "",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].visionSeparator
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                        lineNumber: 208,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].italicPlay,
                                        children: "connect"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                        lineNumber: 209,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: INTRO_SEP_2,
                                        alt: "",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].visionSeparator
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                        lineNumber: 210,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].italicPlay,
                                        children: "delight"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                        lineNumber: 211,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                lineNumber: 206,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                        lineNumber: 203,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                    lineNumber: 202,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                lineNumber: 201,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].curatedSection,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sectionHeader,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].curatedHeading,
                            children: [
                                "curated ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].curatedEmphasis,
                                    children: "works"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                    lineNumber: 221,
                                    columnNumber: 21
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                            lineNumber: 220,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                        lineNumber: 219,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].worksList,
                        children: PORTFOLIO_PROJECTS.map((project)=>{
                            const isHovered = hoveredProject?.id === project.id;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-project-id": project.id,
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].projectRow} ${isHovered ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].activeRow : ""}`,
                                onMouseEnter: ()=>{
                                    if (("TURBOPACK compile-time value", "undefined") !== "undefined" && window.innerWidth > 1024) //TURBOPACK unreachable
                                    ;
                                },
                                onMouseLeave: ()=>{
                                    if (("TURBOPACK compile-time value", "undefined") !== "undefined" && window.innerWidth > 1024) //TURBOPACK unreachable
                                    ;
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].projectRowBgImg,
                                        style: {
                                            backgroundImage: `linear-gradient(to right, rgba(0, 27, 46, 0.85) 15%, rgba(0, 27, 46, 0.25) 85%), url(${project.image})`,
                                            opacity: isHovered ? 1 : 0,
                                            transform: isHovered ? "scale(1.03)" : "scale(1)"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                        lineNumber: 246,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].projectRowInner,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].projectTitleContainer,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].projectTitle,
                                                    children: project.title
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                                    lineNumber: 260,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].viewProjectLink} ${isHovered ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].viewProjectLinkVisible : ""}`,
                                                    "aria-hidden": !isHovered,
                                                    children: "View Project"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                                    lineNumber: 261,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                            lineNumber: 259,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                        lineNumber: 255,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, project.id, true, {
                                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                lineNumber: 230,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                        lineNumber: 225,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                lineNumber: 218,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].processSection,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].processContainer,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].processHeader,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].processSubtitle,
                                    children: "our process"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                    lineNumber: 279,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].processTitle,
                                    children: [
                                        "from sketch ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].processEmphasis,
                                            children: "to space"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                            lineNumber: 281,
                                            columnNumber: 27
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                    lineNumber: 280,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                            lineNumber: 278,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].processGrid,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].processStep,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].processNumber,
                                            children: "01"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                            lineNumber: 289,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].processContentBox,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stepTitleRow,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: PROCESS_DECOR_1,
                                                            alt: "",
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stepDecorIcon
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                                            lineNumber: 292,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stepTitle,
                                                            children: "Start with the Space"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                                            lineNumber: 293,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                                    lineNumber: 291,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stepDescription,
                                                    children: "We visit, listen, and gather everything needed before ideas begin."
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                                    lineNumber: 295,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                            lineNumber: 290,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                    lineNumber: 288,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].processStep,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].processNumber,
                                            children: "02"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                            lineNumber: 303,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].processContentBox,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stepTitleRow,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: PROCESS_DECOR_2,
                                                            alt: "",
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stepDecorIcon
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                                            lineNumber: 306,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stepTitle,
                                                            children: "Shape the Idea"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                                            lineNumber: 307,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                                    lineNumber: 305,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stepDescription,
                                                    children: "Through references and design exploration, the direction starts to emerge."
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                                    lineNumber: 309,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                            lineNumber: 304,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                    lineNumber: 302,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].processStep,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].processNumber,
                                            children: "03"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                            lineNumber: 317,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].processContentBox,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stepTitleRow,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: PROCESS_DECOR_4,
                                                            alt: "",
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stepDecorIcon
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                                            lineNumber: 320,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stepTitle,
                                                            children: "See it in Place"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                                            lineNumber: 321,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                                    lineNumber: 319,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stepDescription,
                                                    children: "The design is mapped into the space so every detail feels right."
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                                    lineNumber: 323,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                            lineNumber: 318,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                    lineNumber: 316,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].processStep,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].processNumber,
                                            children: "04"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                            lineNumber: 331,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].processContentBox,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stepTitleRow,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: PROCESS_DECOR_3,
                                                            alt: "",
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stepDecorIcon
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                                            lineNumber: 334,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stepTitle,
                                                            children: "Bring it to Life"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                                            lineNumber: 335,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                                    lineNumber: 333,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stepDescription,
                                                    children: "With everything approved, we create, install, and deliver the final work."
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                                    lineNumber: 337,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                            lineNumber: 332,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                    lineNumber: 330,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                            lineNumber: 286,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                    lineNumber: 277,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                lineNumber: 276,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].offeringsSection,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].offeringsContainer,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].offeringsTitleCol,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: PINK_FLOWER_URL,
                                    alt: "",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].offeringsIcon
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                    lineNumber: 351,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].offeringsSubtitle,
                                    children: "what we do"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                    lineNumber: 352,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].offeringsTitle,
                                    children: [
                                        "our ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].offeringsEmphasis,
                                            children: "offerings"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                            lineNumber: 354,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                    lineNumber: 353,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                            lineNumber: 350,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].verticalDivider
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                            lineNumber: 358,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].offeringsCol,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].offeringsHeader,
                                    children: "custom services"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                    lineNumber: 362,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].offeringsList,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "wall painting"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                            lineNumber: 364,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "installations"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                            lineNumber: 365,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "canvas painting"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                            lineNumber: 366,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "space design"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                            lineNumber: 367,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "storytelling"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                            lineNumber: 368,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                    lineNumber: 363,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                            lineNumber: 361,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].verticalDivider
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                            lineNumber: 372,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].offeringsCol,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].offeringsHeader,
                                    children: "products"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                    lineNumber: 376,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].offeringsList,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "wallpapers"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                            lineNumber: 378,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "paintings"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                            lineNumber: 379,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                    lineNumber: 377,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                            lineNumber: 375,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                    lineNumber: 348,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                lineNumber: 347,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].testimonialsSection,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].testimonialsHeader,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].testimonialsSubtitle,
                                children: "dont just take our word for it"
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                lineNumber: 388,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].testimonialsTitle,
                                children: [
                                    "client ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].testimonialsEmphasis,
                                        children: "testimonials"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                        lineNumber: 390,
                                        columnNumber: 20
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                lineNumber: 389,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                        lineNumber: 387,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].testimonialsGrid,
                        children: TESTIMONIALS.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].testimonialCard,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].quoteIconBox,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: QUOTE_ICON,
                                            alt: "",
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].quoteIcon
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                            lineNumber: 398,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                        lineNumber: 397,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].quoteText,
                                        children: [
                                            '"',
                                            t.quote,
                                            '"'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                        lineNumber: 400,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].authorDivider
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                        lineNumber: 401,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].authorBox,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].authorName,
                                                children: t.author
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                                lineNumber: 403,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].authorRole,
                                                children: t.role
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                                lineNumber: 404,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                        lineNumber: 402,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, t.id, true, {
                                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                lineNumber: 396,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                        lineNumber: 394,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                lineNumber: 386,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].teamSection,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].teamHeaderRow,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].teamTitleBox,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].teamSubtitle,
                                        children: "small team, big stories"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                        lineNumber: 415,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].teamTitle,
                                        children: [
                                            "the peachy ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].teamEmphasis,
                                                children: "team"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                                lineNumber: 417,
                                                columnNumber: 26
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                        lineNumber: 416,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                lineNumber: 414,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].teamSubDesc,
                                children: "Together, they blend art, design, strategy, and storytelling to create immersive, joyful and meaningful environments that inspire connection and leave a lasting impression."
                            }, void 0, false, {
                                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                lineNumber: 420,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                        lineNumber: 413,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].teamGrid,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].teamProfile,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].headshotContainer,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: MAITREYEE_HEADSHOT,
                                            alt: "Maitreyee Nilawar",
                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].headshotImg} ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].headshotMaitreyee}`
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                            lineNumber: 429,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                        lineNumber: 428,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].profileBio,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].profileName,
                                                children: "Maitreyee Nilawar"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                                lineNumber: 436,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].profileRole,
                                                children: "Director of visual delight"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                                lineNumber: 437,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].profileDescription,
                                                children: "Maitreyee, an alumna of Sir J.J. School of Art and IIT Bombay, is a visual artist with a keen eye for detail and aesthetics. She specializes in transforming spaces through art and design, bringing beauty, character, and emotional depth to every project."
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                                lineNumber: 438,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                        lineNumber: 435,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                lineNumber: 427,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].teamProfile,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].headshotContainer,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: POORVA_HEADSHOT,
                                            alt: "Poorva Kelkar",
                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].headshotImg} ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].headshotPoorva}`
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                            lineNumber: 447,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                        lineNumber: 446,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].profileBio,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].profileName,
                                                children: "Poorva Kelkar"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                                lineNumber: 454,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].profileRole,
                                                children: "Director of thoughtful mischief"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                                lineNumber: 455,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].profileDescription,
                                                children: "Poorva, an architect, product designer, and marketing specialist, is an alumna of NID and IIM Ahmedabad. She combines strategic thinking with creative exploration, helping shape the studio's vision while creating experiences that bring people, stories, and spaces together."
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                                lineNumber: 456,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                        lineNumber: 453,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                lineNumber: 445,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                        lineNumber: 425,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                lineNumber: 412,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].ctaSection,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].ctaContainer,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].ctaTitle,
                            children: [
                                "Let’s create a space that ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].ctaEmphasis,
                                    children: "speaks"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                    lineNumber: 468,
                                    columnNumber: 39
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                            lineNumber: 467,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].ctaDescription,
                            children: [
                                "Every meaningful project begins with a simple conversation.",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                    lineNumber: 471,
                                    columnNumber: 72
                                }, this),
                                "We’d love if you share your vision with us."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                            lineNumber: 470,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].ctaButton,
                            onClick: onStartConversation,
                            children: "Start a Conversation"
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                            lineNumber: 474,
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].footerSection,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].footerBgBox,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: FOOTER_BG,
                            alt: "",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].footerBgImg
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                            lineNumber: 484,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                        lineNumber: 483,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].footerContainer,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].footerMainGrid,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].socialCol,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].socialIconsRow,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "https://www.linkedin.com/company/the-peach-studio-in/about/",
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].socialLink,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: LINKEDIN_BG_URL,
                                                            alt: "",
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].socialIconBg
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                                            lineNumber: 494,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: LINKEDIN_VEC_URL,
                                                            alt: "LinkedIn",
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].socialIconVec
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                                            lineNumber: 495,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                                    lineNumber: 493,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "https://www.instagram.com/thepeachstudio.in/",
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].socialLink,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: INSTAGRAM_BG_URL,
                                                            alt: "",
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].socialIconBg
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                                            lineNumber: 498,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: INSTAGRAM_VEC_URL,
                                                            alt: "Instagram",
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].socialIconVec
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                                            lineNumber: 499,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                                    lineNumber: 497,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                            lineNumber: 492,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                        lineNumber: 491,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].wordmarkCol,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: PEACH_ICON_LIGHT_URL,
                                                alt: "",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].footerWordmarkIcon
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                                lineNumber: 506,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: PEACH_WORDMARK_LIGHT_URL,
                                                alt: "The Peach Studio",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].footerWordmark
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                                lineNumber: 507,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                        lineNumber: 505,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].contactCol,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].contactHeader,
                                                children: "Let’s get in touch"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                                lineNumber: 512,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].contactDetails,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "mailto:poorva.kelkar@gmail.com",
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].contactLink,
                                                        children: "poorva.kelkar@gmail.com"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                                        lineNumber: 514,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "tel:+919217689001",
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].contactLink,
                                                        children: "+91 92176 89001"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                                        lineNumber: 517,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                                lineNumber: 513,
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
                                lineNumber: 489,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].metadataRow,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].copyrightMark,
                                        "aria-hidden": "true",
                                        children: "©"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                        lineNumber: 526,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "2026"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                        lineNumber: 529,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].metadataLabelSep
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                        lineNumber: 530,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "The Peach Studio"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                        lineNumber: 531,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].metadataLabelSep
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                        lineNumber: 532,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "All rights reserved"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                        lineNumber: 533,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                                lineNumber: 525,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                        lineNumber: 487,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
                lineNumber: 481,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/MainLanding.tsx",
        lineNumber: 140,
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/ThePeachStudio/src/utils/paths.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.module.css [app-ssr] (css module)");
"use client";
;
;
;
;
const TREE_ILLUSTRATION_URL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/contact/tree-illustration.png");
const CLOSE_ICON_URL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/contact/close-icon.svg");
const UPLOAD_ICON_URL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/contact/upload-icon.svg");
const SUBMIT_ARROW_URL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/contact/submit-arrow.svg");
const PHONE_ICON_URL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/contact/phone-icon.svg");
const EMAIL_ICON_URL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/contact/email-icon.svg");
const RADIO_CHECKED_URL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/contact/radio-checked.png");
const RADIO_UNCHECKED_URL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/contact/radio-unchecked.png");
const SUCCESS_ICON_URL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/contact/success-icon.png");
const ERROR_ICON_URL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$utils$2f$paths$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAssetPath"])("/images/contact/error-icon.png");
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
                    lineNumber: 132,
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
                        lineNumber: 136,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                    lineNumber: 135,
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
                                    lineNumber: 143,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                            lineNumber: 142,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].subtitle,
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
                                                lineNumber: 159,
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
                                                lineNumber: 160,
                                                columnNumber: 19
                                            }, this),
                                            errors.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].errorText,
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
                                                    lineNumber: 176,
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
                                                    lineNumber: 177,
                                                    columnNumber: 19
                                                }, this),
                                                errors.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].errorText,
                                                    children: errors.email
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                                    lineNumber: 186,
                                                    columnNumber: 36
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                            lineNumber: 175,
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
                                                    lineNumber: 190,
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
                                                    lineNumber: 191,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                            lineNumber: 189,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                    lineNumber: 174,
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
                                            lineNumber: 205,
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
                                                                src: formData.role === "professional" ? RADIO_CHECKED_URL : RADIO_UNCHECKED_URL,
                                                                alt: "",
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].radioIcon
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                                                lineNumber: 212,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                                            lineNumber: 211,
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
                                                                    lineNumber: 219,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].radioDesc,
                                                                    children: "Architect, interior designer, or business owner"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                                                    lineNumber: 220,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                                            lineNumber: 218,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                                    lineNumber: 207,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].radioCard} ${formData.role === "homeowner" ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].radioCardActive : ""}`,
                                                    onClick: ()=>formState !== "submitting" && handleRoleSelect("homeowner"),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].radioIconContainer,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                src: formData.role === "homeowner" ? RADIO_CHECKED_URL : RADIO_UNCHECKED_URL,
                                                                alt: "",
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].radioIcon
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                                                lineNumber: 229,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                                            lineNumber: 228,
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
                                                                    lineNumber: 236,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].radioDesc,
                                                                    children: "Looking to bring a story into your home."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                                                    lineNumber: 237,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                                            lineNumber: 235,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                                    lineNumber: 224,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                            lineNumber: 206,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                    lineNumber: 204,
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
                                            lineNumber: 245,
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
                                            lineNumber: 246,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                    lineNumber: 244,
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
                                            lineNumber: 259,
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
                                                        lineNumber: 262,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                                    lineNumber: 261,
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
                                                            lineNumber: 265,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].uploadDesc,
                                                            children: "Up to 4 images · JPG, PNG, PDF · Max 10 MB each"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                                            lineNumber: 266,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                                    lineNumber: 264,
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
                                                    lineNumber: 268,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                            lineNumber: 260,
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
                                            lineNumber: 279,
                                            columnNumber: 19
                                        }, this),
                                        errors.file && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].errorText,
                                            children: errors.file
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                            lineNumber: 283,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                    lineNumber: 258,
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
                                                    lineNumber: 293,
                                                    columnNumber: 19
                                                }, this),
                                                formState !== "submitting" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: SUBMIT_ARROW_URL,
                                                    alt: "Submit Arrow",
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].submitArrow
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                                    lineNumber: 295,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                            lineNumber: 288,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].submitCaption,
                                            children: "We'll review your brief and get back to you."
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                            lineNumber: 298,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                    lineNumber: 287,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                            lineNumber: 154,
                            columnNumber: 13
                        }, this) : formState === "success" ? /* Success confirmation card screen */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stateContainer,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stateIcon,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: SUCCESS_ICON_URL,
                                        alt: "",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stateIconImg
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                        lineNumber: 306,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                    lineNumber: 305,
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
                                            lineNumber: 309,
                                            columnNumber: 39
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                    lineNumber: 308,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stateDescription,
                                    children: "We will review your project brief carefully and get back to you soon."
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                    lineNumber: 311,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stateButton,
                                    onClick: triggerClose,
                                    children: "Back to Home"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                    lineNumber: 314,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                            lineNumber: 304,
                            columnNumber: 13
                        }, this) : /* Error confirmation card screen */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stateContainer,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stateIcon,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: ERROR_ICON_URL,
                                        alt: "",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stateIconImg
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                        lineNumber: 322,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                    lineNumber: 321,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stateTitle,
                                    children: "Hmm, your story didn't reach us :("
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                    lineNumber: 324,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stateDescription,
                                    children: "Something interrupted the submission. Please try again."
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                    lineNumber: 325,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stateButton,
                                    onClick: handleReset,
                                    children: "Try Again"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                    lineNumber: 328,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                            lineNumber: 320,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].divider
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                            lineNumber: 335,
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
                                    lineNumber: 339,
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
                                                        lineNumber: 345,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                                    lineNumber: 344,
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
                                                            lineNumber: 348,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].directCaption,
                                                            children: "Fastest."
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                                            lineNumber: 349,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                                    lineNumber: 347,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                            lineNumber: 343,
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
                                                        lineNumber: 356,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                                    lineNumber: 355,
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
                                                            lineNumber: 359,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].directCaption,
                                                            children: "Most Common."
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                                            lineNumber: 360,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                                    lineNumber: 358,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                            lineNumber: 354,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                                    lineNumber: 341,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                            lineNumber: 338,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/components/ContactModal.tsx",
                    lineNumber: 152,
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
        setCurrentStep("landing");
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
            lineNumber: 28,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$MainLanding$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    onStartConversation: handleStartConversation
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/app/page.tsx",
                    lineNumber: 31,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$ThePeachStudio$2f$src$2f$components$2f$ContactModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    isOpen: isContactOpen,
                    onClose: handleCloseConversation
                }, void 0, false, {
                    fileName: "[project]/Documents/GitHub/ThePeachStudio/src/app/page.tsx",
                    lineNumber: 32,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true)
    }, void 0, false);
}
}),
];

//# sourceMappingURL=Documents_GitHub_ThePeachStudio_src_1y4xxoc._.js.map