(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/SplashIntro.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "bgImage": "SplashIntro-module__Efvy0a__bgImage",
  "canvasHidden": "SplashIntro-module__Efvy0a__canvasHidden",
  "centerContainer": "SplashIntro-module__Efvy0a__centerContainer",
  "customCursor": "SplashIntro-module__Efvy0a__customCursor",
  "customCursorActive": "SplashIntro-module__Efvy0a__customCursorActive",
  "fadeOut": "SplashIntro-module__Efvy0a__fadeOut",
  "getStartedBtn": "SplashIntro-module__Efvy0a__getStartedBtn",
  "logoIcon": "SplashIntro-module__Efvy0a__logoIcon",
  "logoIconImg": "SplashIntro-module__Efvy0a__logoIconImg",
  "logoLockup": "SplashIntro-module__Efvy0a__logoLockup",
  "logoWordmark": "SplashIntro-module__Efvy0a__logoWordmark",
  "paintCanvas": "SplashIntro-module__Efvy0a__paintCanvas",
  "splashScreen": "SplashIntro-module__Efvy0a__splashScreen",
  "subtleZoom": "SplashIntro-module__Efvy0a__subtleZoom",
});
}),
"[project]/src/components/SplashIntro.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SplashIntro
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SplashIntro$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/SplashIntro.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const SPLASH_IMAGES = [
    "https://www.figma.com/api/mcp/asset/9692ba7c-cda5-4077-9185-225fe86b5246",
    "https://www.figma.com/api/mcp/asset/808c6024-e375-4927-a20a-40627fa90684",
    "https://www.figma.com/api/mcp/asset/82bde8e4-894a-4b6b-b2b8-7e42d9cfe922",
    "https://www.figma.com/api/mcp/asset/42eab491-f1c9-4c5b-86af-6e690044f0db"
];
const LOGO_ICON_URL = "https://www.figma.com/api/mcp/asset/06e29e03-8b67-488b-b3bc-a7610d41b3ab";
const LOGO_WORDMARK_URL = "https://www.figma.com/api/mcp/asset/cf40d218-1acb-4b6b-aac6-a0cec43433dc";
function SplashIntro({ onGetStarted, isExiting }) {
    _s();
    const [bgImage, setBgImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [cursorPos, setCursorPos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: -100,
        y: -100
    });
    const [isHovering, setIsHovering] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isClicking, setIsClicking] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isFullyRevealed, setIsFullyRevealed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const strokeCountRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SplashIntro.useEffect": ()=>{
            // Choose a random splash background image with reload-guarantee
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
            setBgImage(SPLASH_IMAGES[nextIndex]);
        }
    }["SplashIntro.useEffect"], []);
    // Initialize and resize canvas
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
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
                    // Fill with brand warm white `#faf6f2`
                    ctx.fillStyle = "#faf6f2";
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                }
            }["SplashIntro.useEffect.resizeCanvas"];
            resizeCanvas();
            window.addEventListener("resize", resizeCanvas);
            return ({
                "SplashIntro.useEffect": ()=>window.removeEventListener("resize", resizeCanvas)
            })["SplashIntro.useEffect"];
        }
    }["SplashIntro.useEffect"], [
        bgImage
    ]); // Reinitialize when background image loads
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
        } catch (e) {
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
    if (!bgImage) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SplashIntro$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].splashScreen} ${isExiting ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SplashIntro$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fadeOut : ""}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: bgImage,
                alt: "The Peach Studio Background Painting",
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SplashIntro$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bgImage
            }, void 0, false, {
                fileName: "[project]/src/components/SplashIntro.tsx",
                lineNumber: 185,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SplashIntro$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].paintCanvas} ${isFullyRevealed ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SplashIntro$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].canvasHidden : ""}`,
                onMouseMove: handleMouseMove,
                onMouseEnter: handleMouseEnter,
                onMouseLeave: handleMouseLeave,
                onMouseDown: handleMouseDown,
                onMouseUp: handleMouseUp,
                onTouchMove: handleTouchMove
            }, void 0, false, {
                fileName: "[project]/src/components/SplashIntro.tsx",
                lineNumber: 188,
                columnNumber: 7
            }, this),
            isHovering && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SplashIntro$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].customCursor} ${isClicking ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SplashIntro$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].customCursorActive : ""}`,
                style: {
                    left: `${cursorPos.x}px`,
                    top: `${cursorPos.y}px`
                }
            }, void 0, false, {
                fileName: "[project]/src/components/SplashIntro.tsx",
                lineNumber: 201,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SplashIntro$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoLockup,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SplashIntro$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoIcon,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: LOGO_ICON_URL,
                            alt: "Peach Icon",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SplashIntro$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoIconImg
                        }, void 0, false, {
                            fileName: "[project]/src/components/SplashIntro.tsx",
                            lineNumber: 210,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/SplashIntro.tsx",
                        lineNumber: 209,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: LOGO_WORDMARK_URL,
                        alt: "the peach studio",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SplashIntro$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoWordmark
                    }, void 0, false, {
                        fileName: "[project]/src/components/SplashIntro.tsx",
                        lineNumber: 212,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SplashIntro.tsx",
                lineNumber: 208,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SplashIntro$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].centerContainer,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SplashIntro$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].getStartedBtn,
                    onClick: onGetStarted,
                    children: "Get Started"
                }, void 0, false, {
                    fileName: "[project]/src/components/SplashIntro.tsx",
                    lineNumber: 217,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/SplashIntro.tsx",
                lineNumber: 216,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/SplashIntro.tsx",
        lineNumber: 183,
        columnNumber: 5
    }, this);
}
_s(SplashIntro, "irIAci2FP7FvvrHIKJrWLkKtXWM=");
_c = SplashIntro;
var _c;
__turbopack_context__.k.register(_c, "SplashIntro");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/MainLanding.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "breatheLeft": "MainLanding-module__NA2pjW__breatheLeft",
  "breatheRight": "MainLanding-module__NA2pjW__breatheRight",
  "centerIcon": "MainLanding-module__NA2pjW__centerIcon",
  "centerIconImg": "MainLanding-module__NA2pjW__centerIconImg",
  "comingSoonBadge": "MainLanding-module__NA2pjW__comingSoonBadge",
  "contactEmail": "MainLanding-module__NA2pjW__contactEmail",
  "contactLabel": "MainLanding-module__NA2pjW__contactLabel",
  "contactPhone": "MainLanding-module__NA2pjW__contactPhone",
  "contacts": "MainLanding-module__NA2pjW__contacts",
  "copyrightRow": "MainLanding-module__NA2pjW__copyrightRow",
  "cropBox": "MainLanding-module__NA2pjW__cropBox",
  "ctaButton": "MainLanding-module__NA2pjW__ctaButton",
  "description": "MainLanding-module__NA2pjW__description",
  "flowerLeftContainer": "MainLanding-module__NA2pjW__flowerLeftContainer",
  "flowerLeftImg": "MainLanding-module__NA2pjW__flowerLeftImg",
  "flowerRightBox": "MainLanding-module__NA2pjW__flowerRightBox",
  "flowerRightContainer": "MainLanding-module__NA2pjW__flowerRightContainer",
  "flowerRightImg": "MainLanding-module__NA2pjW__flowerRightImg",
  "footer": "MainLanding-module__NA2pjW__footer",
  "footerLogo": "MainLanding-module__NA2pjW__footerLogo",
  "footerRow": "MainLanding-module__NA2pjW__footerRow",
  "landingContainer": "MainLanding-module__NA2pjW__landingContainer",
  "mainContent": "MainLanding-module__NA2pjW__mainContent",
  "rotateContainer": "MainLanding-module__NA2pjW__rotateContainer",
  "socialBg": "MainLanding-module__NA2pjW__socialBg",
  "socialIcon": "MainLanding-module__NA2pjW__socialIcon",
  "socialLink": "MainLanding-module__NA2pjW__socialLink",
  "socials": "MainLanding-module__NA2pjW__socials",
  "subDescription": "MainLanding-module__NA2pjW__subDescription",
  "tagline": "MainLanding-module__NA2pjW__tagline",
  "taglineEmphasis": "MainLanding-module__NA2pjW__taglineEmphasis",
});
}),
"[project]/src/components/MainLanding.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MainLanding
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/MainLanding.module.css [app-client] (css module)");
"use client";
;
;
const PINK_FLOWER_URL = "https://www.figma.com/api/mcp/asset/4f9b4686-af74-4281-9372-38b4b2d48867";
const FOOTER_LOGO_URL = "https://www.figma.com/api/mcp/asset/7467a2ea-7e21-4de4-9542-c0194fb956ac";
const CENTER_ICON_URL = "https://www.figma.com/api/mcp/asset/018d5e84-760a-41f1-9271-2b8ae09a6a29";
// Social icons background & vectors
const LINKEDIN_BG_URL = "https://www.figma.com/api/mcp/asset/75781258-a543-4ad4-a978-50a6ae6e0acf";
const LINKEDIN_VEC_URL = "https://www.figma.com/api/mcp/asset/6df98136-25af-4f35-bea9-ea0c0f77290a";
const INSTAGRAM_BG_URL = "https://www.figma.com/api/mcp/asset/3ae4db19-4ab0-4176-b596-0d55f72b4efb";
const INSTAGRAM_VEC_URL = "https://www.figma.com/api/mcp/asset/dca1cf5f-c35a-4be6-a033-6865b3f4adb1";
function MainLanding({ onStartConversation }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].landingContainer,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].flowerLeftContainer,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cropBox,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: PINK_FLOWER_URL,
                        alt: "Watercolor Pink Flower Left",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].flowerLeftImg
                    }, void 0, false, {
                        fileName: "[project]/src/components/MainLanding.tsx",
                        lineNumber: 26,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/MainLanding.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/MainLanding.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].flowerRightContainer,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].rotateContainer,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].flowerRightBox,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cropBox,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: PINK_FLOWER_URL,
                                alt: "Watercolor Pink Flower Right",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].flowerRightImg
                            }, void 0, false, {
                                fileName: "[project]/src/components/MainLanding.tsx",
                                lineNumber: 35,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/MainLanding.tsx",
                            lineNumber: 34,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/MainLanding.tsx",
                        lineNumber: 33,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/MainLanding.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/MainLanding.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mainContent,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].centerIcon,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: CENTER_ICON_URL,
                            alt: "Peach Studio Mark",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].centerIconImg
                        }, void 0, false, {
                            fileName: "[project]/src/components/MainLanding.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/MainLanding.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].comingSoonBadge,
                        children: "Coming Soon"
                    }, void 0, false, {
                        fileName: "[project]/src/components/MainLanding.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tagline,
                        children: [
                            "We’re building our story",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].taglineEmphasis,
                                children: "..."
                            }, void 0, false, {
                                fileName: "[project]/src/components/MainLanding.tsx",
                                lineNumber: 53,
                                columnNumber: 35
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/MainLanding.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].description,
                        children: "Our website is taking shape behind the scenes"
                    }, void 0, false, {
                        fileName: "[project]/src/components/MainLanding.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].subDescription,
                        children: "In the meantime, we'd love to hear about your project..."
                    }, void 0, false, {
                        fileName: "[project]/src/components/MainLanding.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ctaButton,
                        onClick: onStartConversation,
                        children: "Start a Conversation"
                    }, void 0, false, {
                        fileName: "[project]/src/components/MainLanding.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/MainLanding.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].footer,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].footerRow,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].socials,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://www.linkedin.com/company/the-peach-studio-in/about/",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].socialLink,
                                        "aria-label": "LinkedIn Profile",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: LINKEDIN_BG_URL,
                                                alt: "LinkedIn Background Circle",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].socialBg
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MainLanding.tsx",
                                                lineNumber: 83,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: LINKEDIN_VEC_URL,
                                                alt: "LinkedIn Logo Vector",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].socialIcon
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MainLanding.tsx",
                                                lineNumber: 84,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/MainLanding.tsx",
                                        lineNumber: 76,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://www.instagram.com/thepeachstudioofficial/?utm_source=ig_web_button_share_sheet",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].socialLink,
                                        "aria-label": "Instagram Profile",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: INSTAGRAM_BG_URL,
                                                alt: "Instagram Background Circle",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].socialBg
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MainLanding.tsx",
                                                lineNumber: 94,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: INSTAGRAM_VEC_URL,
                                                alt: "Instagram Logo Vector",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].socialIcon
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MainLanding.tsx",
                                                lineNumber: 95,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/MainLanding.tsx",
                                        lineNumber: 87,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/MainLanding.tsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: FOOTER_LOGO_URL,
                                alt: "the peach studio",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].footerLogo
                            }, void 0, false, {
                                fileName: "[project]/src/components/MainLanding.tsx",
                                lineNumber: 100,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].contacts,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].contactLabel,
                                        children: "Let’s get in touch"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/MainLanding.tsx",
                                        lineNumber: 104,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "mailto:poorva.kelkar@gmail.com",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].contactEmail,
                                        children: "poorva.kelkar@gmail.com"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/MainLanding.tsx",
                                        lineNumber: 105,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "tel:+919217689001",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].contactPhone,
                                        children: "+91 92176 89001"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/MainLanding.tsx",
                                        lineNumber: 108,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/MainLanding.tsx",
                                lineNumber: 103,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/MainLanding.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainLanding$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].copyrightRow,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "© 2026 The Peach Studio | All rights reserved"
                        }, void 0, false, {
                            fileName: "[project]/src/components/MainLanding.tsx",
                            lineNumber: 116,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/MainLanding.tsx",
                        lineNumber: 115,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/MainLanding.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/MainLanding.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_c = MainLanding;
var _c;
__turbopack_context__.k.register(_c, "MainLanding");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ContactModal.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "closeButton": "ContactModal-module__M_UpNq__closeButton",
  "closeIconImg": "ContactModal-module__M_UpNq__closeIconImg",
  "directCaption": "ContactModal-module__M_UpNq__directCaption",
  "directContacts": "ContactModal-module__M_UpNq__directContacts",
  "directIcon": "ContactModal-module__M_UpNq__directIcon",
  "directIconImg": "ContactModal-module__M_UpNq__directIconImg",
  "directLinkCard": "ContactModal-module__M_UpNq__directLinkCard",
  "directRow": "ContactModal-module__M_UpNq__directRow",
  "directTextCol": "ContactModal-module__M_UpNq__directTextCol",
  "directTitle": "ContactModal-module__M_UpNq__directTitle",
  "directValue": "ContactModal-module__M_UpNq__directValue",
  "divider": "ContactModal-module__M_UpNq__divider",
  "errorText": "ContactModal-module__M_UpNq__errorText",
  "fadeInState": "ContactModal-module__M_UpNq__fadeInState",
  "fileSelectedBadge": "ContactModal-module__M_UpNq__fileSelectedBadge",
  "form": "ContactModal-module__M_UpNq__form",
  "formContainer": "ContactModal-module__M_UpNq__formContainer",
  "formGroup": "ContactModal-module__M_UpNq__formGroup",
  "header": "ContactModal-module__M_UpNq__header",
  "hiddenFileInput": "ContactModal-module__M_UpNq__hiddenFileInput",
  "input": "ContactModal-module__M_UpNq__input",
  "label": "ContactModal-module__M_UpNq__label",
  "modalCard": "ContactModal-module__M_UpNq__modalCard",
  "modalOverlay": "ContactModal-module__M_UpNq__modalOverlay",
  "nameFormGroup": "ContactModal-module__M_UpNq__nameFormGroup",
  "nameRow": "ContactModal-module__M_UpNq__nameRow",
  "overlayActive": "ContactModal-module__M_UpNq__overlayActive",
  "radioCard": "ContactModal-module__M_UpNq__radioCard",
  "radioCardActive": "ContactModal-module__M_UpNq__radioCardActive",
  "radioCircle": "ContactModal-module__M_UpNq__radioCircle",
  "radioContainer": "ContactModal-module__M_UpNq__radioContainer",
  "radioContent": "ContactModal-module__M_UpNq__radioContent",
  "radioDesc": "ContactModal-module__M_UpNq__radioDesc",
  "radioDot": "ContactModal-module__M_UpNq__radioDot",
  "radioTitle": "ContactModal-module__M_UpNq__radioTitle",
  "rowInputs": "ContactModal-module__M_UpNq__rowInputs",
  "scaleInState": "ContactModal-module__M_UpNq__scaleInState",
  "stateButton": "ContactModal-module__M_UpNq__stateButton",
  "stateContainer": "ContactModal-module__M_UpNq__stateContainer",
  "stateDescription": "ContactModal-module__M_UpNq__stateDescription",
  "stateIcon": "ContactModal-module__M_UpNq__stateIcon",
  "stateTitle": "ContactModal-module__M_UpNq__stateTitle",
  "submitArrow": "ContactModal-module__M_UpNq__submitArrow",
  "submitBlock": "ContactModal-module__M_UpNq__submitBlock",
  "submitButton": "ContactModal-module__M_UpNq__submitButton",
  "submitCaption": "ContactModal-module__M_UpNq__submitCaption",
  "subtitle": "ContactModal-module__M_UpNq__subtitle",
  "textarea": "ContactModal-module__M_UpNq__textarea",
  "title": "ContactModal-module__M_UpNq__title",
  "titleEmphasis": "ContactModal-module__M_UpNq__titleEmphasis",
  "treeImg": "ContactModal-module__M_UpNq__treeImg",
  "uploadArea": "ContactModal-module__M_UpNq__uploadArea",
  "uploadDesc": "ContactModal-module__M_UpNq__uploadDesc",
  "uploadIcon": "ContactModal-module__M_UpNq__uploadIcon",
  "uploadIconImg": "ContactModal-module__M_UpNq__uploadIconImg",
  "uploadTextCol": "ContactModal-module__M_UpNq__uploadTextCol",
  "uploadTitle": "ContactModal-module__M_UpNq__uploadTitle",
});
}),
"[project]/src/components/ContactModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ContactModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/ContactModal.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const TREE_ILLUSTRATION_URL = "https://www.figma.com/api/mcp/asset/519f660a-ba63-4b69-8612-f2c60c4e9e99";
const CLOSE_ICON_URL = "https://www.figma.com/api/mcp/asset/df6b62d1-6771-436d-945a-fca10da3dfc2";
const UPLOAD_ICON_URL = "https://www.figma.com/api/mcp/asset/a85bc481-5207-4acd-9140-e974a2006773";
const SUBMIT_ARROW_URL = "https://www.figma.com/api/mcp/asset/07625521-a950-4ad0-868c-6408c65dce34";
const PHONE_ICON_URL = "https://www.figma.com/api/mcp/asset/29d842b3-447b-40a3-9c04-2292c407fa6c";
const EMAIL_ICON_URL = "https://www.figma.com/api/mcp/asset/15eb65c6-382f-49bf-ba83-b6ce2c0c072c";
function ContactModal({ isOpen, onClose }) {
    _s();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        email: "",
        phone: "",
        role: "professional",
        message: ""
    });
    const [selectedFile, setSelectedFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [formState, setFormState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("idle");
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalOverlay} ${isOpen ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].overlayActive : ""}`,
        onClick: triggerClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalCard,
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: TREE_ILLUSTRATION_URL,
                    alt: "Majestic tree sketch",
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].treeImg
                }, void 0, false, {
                    fileName: "[project]/src/components/ContactModal.tsx",
                    lineNumber: 127,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].closeButton,
                    onClick: triggerClose,
                    "aria-label": "Close form modal",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: CLOSE_ICON_URL,
                        alt: "Close button mark",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].closeIconImg
                    }, void 0, false, {
                        fileName: "[project]/src/components/ContactModal.tsx",
                        lineNumber: 131,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ContactModal.tsx",
                    lineNumber: 130,
                    columnNumber: 9
                }, this),
                (formState === "idle" || formState === "submitting") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                            children: [
                                "Let's make a ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].titleEmphasis,
                                    children: "story together"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ContactModal.tsx",
                                    lineNumber: 138,
                                    columnNumber: 28
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ContactModal.tsx",
                            lineNumber: 137,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].subtitle,
                            children: "Tell us what you're dreaming up. We'll help shape the rest."
                        }, void 0, false, {
                            fileName: "[project]/src/components/ContactModal.tsx",
                            lineNumber: 140,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ContactModal.tsx",
                    lineNumber: 136,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formContainer,
                    children: [
                        formState === "idle" || formState === "submitting" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].form,
                            onSubmit: handleSubmit,
                            noValidate: true,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].nameRow,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].nameFormGroup,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "name",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                                                children: "Your Name"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ContactModal.tsx",
                                                lineNumber: 154,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                id: "name",
                                                name: "name",
                                                value: formData.name,
                                                onChange: handleChange,
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input,
                                                disabled: formState === "submitting"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ContactModal.tsx",
                                                lineNumber: 155,
                                                columnNumber: 19
                                            }, this),
                                            errors.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].errorText,
                                                children: errors.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ContactModal.tsx",
                                                lineNumber: 164,
                                                columnNumber: 35
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ContactModal.tsx",
                                        lineNumber: 153,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ContactModal.tsx",
                                    lineNumber: 152,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].rowInputs,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formGroup,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "email",
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                                                    children: "Email"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ContactModal.tsx",
                                                    lineNumber: 171,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "email",
                                                    id: "email",
                                                    name: "email",
                                                    value: formData.email,
                                                    onChange: handleChange,
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input,
                                                    disabled: formState === "submitting"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ContactModal.tsx",
                                                    lineNumber: 172,
                                                    columnNumber: 19
                                                }, this),
                                                errors.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].errorText,
                                                    children: errors.email
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ContactModal.tsx",
                                                    lineNumber: 181,
                                                    columnNumber: 36
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ContactModal.tsx",
                                            lineNumber: 170,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formGroup,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "phone",
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                                                    children: "Phone Number (optional)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ContactModal.tsx",
                                                    lineNumber: 185,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "tel",
                                                    id: "phone",
                                                    name: "phone",
                                                    value: formData.phone,
                                                    onChange: handleChange,
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input,
                                                    disabled: formState === "submitting"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ContactModal.tsx",
                                                    lineNumber: 186,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ContactModal.tsx",
                                            lineNumber: 184,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ContactModal.tsx",
                                    lineNumber: 169,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formGroup,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                                            children: "You are a..."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ContactModal.tsx",
                                            lineNumber: 200,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].radioContainer,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].radioCard} ${formData.role === "professional" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].radioCardActive : ""}`,
                                                    onClick: ()=>formState !== "submitting" && handleRoleSelect("professional"),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].radioCircle,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].radioDot
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ContactModal.tsx",
                                                                lineNumber: 207,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ContactModal.tsx",
                                                            lineNumber: 206,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].radioContent,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].radioTitle,
                                                                    children: "Professional"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/ContactModal.tsx",
                                                                    lineNumber: 210,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].radioDesc,
                                                                    children: "Architect, interior designer, or business owner"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/ContactModal.tsx",
                                                                    lineNumber: 211,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/ContactModal.tsx",
                                                            lineNumber: 209,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/ContactModal.tsx",
                                                    lineNumber: 202,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].radioCard} ${formData.role === "homeowner" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].radioCardActive : ""}`,
                                                    onClick: ()=>formState !== "submitting" && handleRoleSelect("homeowner"),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].radioCircle,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].radioDot
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ContactModal.tsx",
                                                                lineNumber: 220,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ContactModal.tsx",
                                                            lineNumber: 219,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].radioContent,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].radioTitle,
                                                                    children: "Homeowner"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/ContactModal.tsx",
                                                                    lineNumber: 223,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].radioDesc,
                                                                    children: "Looking to bring a story into your home."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/ContactModal.tsx",
                                                                    lineNumber: 224,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/ContactModal.tsx",
                                                            lineNumber: 222,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/ContactModal.tsx",
                                                    lineNumber: 215,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ContactModal.tsx",
                                            lineNumber: 201,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ContactModal.tsx",
                                    lineNumber: 199,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formGroup,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "message",
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                                            children: "Share what you’re imagining"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ContactModal.tsx",
                                            lineNumber: 232,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            id: "message",
                                            name: "message",
                                            value: formData.message,
                                            onChange: handleChange,
                                            placeholder: "Tell us about the space, the story, or anything else that feels important.",
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].textarea,
                                            disabled: formState === "submitting"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ContactModal.tsx",
                                            lineNumber: 233,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ContactModal.tsx",
                                    lineNumber: 231,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formGroup,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                                            children: "Share a few visual references (optional)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ContactModal.tsx",
                                            lineNumber: 246,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].uploadArea,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].uploadIcon,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: UPLOAD_ICON_URL,
                                                        alt: "Upload logo mark",
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].uploadIconImg
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ContactModal.tsx",
                                                        lineNumber: 249,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ContactModal.tsx",
                                                    lineNumber: 248,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].uploadTextCol,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].uploadTitle,
                                                            children: "Photos, sketches, moodboards, floor plans, etc"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ContactModal.tsx",
                                                            lineNumber: 252,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].uploadDesc,
                                                            children: "Up to 4 images · JPG, PNG, PDF · Max 10 MB each"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ContactModal.tsx",
                                                            lineNumber: 253,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/ContactModal.tsx",
                                                    lineNumber: 251,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "file",
                                                    ref: fileInputRef,
                                                    onChange: handleFileChange,
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hiddenFileInput,
                                                    accept: ".jpg,.jpeg,.png,.pdf",
                                                    disabled: formState === "submitting",
                                                    "aria-label": "Upload visual references file"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ContactModal.tsx",
                                                    lineNumber: 255,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ContactModal.tsx",
                                            lineNumber: 247,
                                            columnNumber: 17
                                        }, this),
                                        selectedFile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fileSelectedBadge,
                                            children: [
                                                "✓ ",
                                                selectedFile.name,
                                                " (",
                                                (selectedFile.size / (1024 * 1024)).toFixed(2),
                                                " MB)"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ContactModal.tsx",
                                            lineNumber: 266,
                                            columnNumber: 19
                                        }, this),
                                        errors.file && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].errorText,
                                            children: errors.file
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ContactModal.tsx",
                                            lineNumber: 270,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ContactModal.tsx",
                                    lineNumber: 245,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].submitBlock,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].submitButton,
                                            disabled: formState === "submitting",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: formState === "submitting" ? "Submitting..." : "Submit"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ContactModal.tsx",
                                                    lineNumber: 280,
                                                    columnNumber: 19
                                                }, this),
                                                formState !== "submitting" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: SUBMIT_ARROW_URL,
                                                    alt: "Submit Arrow",
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].submitArrow
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ContactModal.tsx",
                                                    lineNumber: 282,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ContactModal.tsx",
                                            lineNumber: 275,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].submitCaption,
                                            children: "We'll review your brief and get back to you."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ContactModal.tsx",
                                            lineNumber: 285,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ContactModal.tsx",
                                    lineNumber: 274,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ContactModal.tsx",
                            lineNumber: 149,
                            columnNumber: 13
                        }, this) : formState === "success" ? /* Success confirmation card screen */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stateContainer,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stateIcon,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        viewBox: "0 0 24 24",
                                        width: "86",
                                        height: "80",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "1.2",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        style: {
                                            color: '#d47059'
                                        },
                                        "aria-hidden": "true",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ContactModal.tsx",
                                            lineNumber: 294,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ContactModal.tsx",
                                        lineNumber: 293,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ContactModal.tsx",
                                    lineNumber: 292,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stateTitle,
                                    children: "Thank you for sharing your story!"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ContactModal.tsx",
                                    lineNumber: 297,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stateDescription,
                                    children: "We will review your project brief carefully and get back to you soon."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ContactModal.tsx",
                                    lineNumber: 298,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stateButton,
                                    onClick: triggerClose,
                                    children: "Back to Home"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ContactModal.tsx",
                                    lineNumber: 301,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ContactModal.tsx",
                            lineNumber: 291,
                            columnNumber: 13
                        }, this) : /* Error confirmation card screen */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stateContainer,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stateIcon,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        viewBox: "0 0 24 24",
                                        width: "86",
                                        height: "80",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "1.2",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        style: {
                                            color: '#d47059'
                                        },
                                        "aria-hidden": "true",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                cx: "12",
                                                cy: "12",
                                                r: "10"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ContactModal.tsx",
                                                lineNumber: 310,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "12",
                                                y1: "8",
                                                x2: "12",
                                                y2: "12"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ContactModal.tsx",
                                                lineNumber: 311,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "12",
                                                y1: "16",
                                                x2: "12.01",
                                                y2: "16"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ContactModal.tsx",
                                                lineNumber: 312,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ContactModal.tsx",
                                        lineNumber: 309,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ContactModal.tsx",
                                    lineNumber: 308,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stateTitle,
                                    children: "Hmm, your story didn't reach us :("
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ContactModal.tsx",
                                    lineNumber: 315,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stateDescription,
                                    children: "Something interrupted the submission. Please try again."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ContactModal.tsx",
                                    lineNumber: 316,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stateButton,
                                    onClick: handleReset,
                                    children: "Try Again"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ContactModal.tsx",
                                    lineNumber: 319,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ContactModal.tsx",
                            lineNumber: 307,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].divider
                        }, void 0, false, {
                            fileName: "[project]/src/components/ContactModal.tsx",
                            lineNumber: 326,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].directContacts,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].directTitle,
                                    children: "or get in touch directly"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ContactModal.tsx",
                                    lineNumber: 330,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].directRow,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "tel:+919217689001",
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].directLinkCard,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].directIcon,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: PHONE_ICON_URL,
                                                        alt: "Phone link logo",
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].directIconImg
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ContactModal.tsx",
                                                        lineNumber: 336,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ContactModal.tsx",
                                                    lineNumber: 335,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].directTextCol,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].directValue,
                                                            children: "+91 92176 89001"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ContactModal.tsx",
                                                            lineNumber: 339,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].directCaption,
                                                            children: "Fastest."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ContactModal.tsx",
                                                            lineNumber: 340,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/ContactModal.tsx",
                                                    lineNumber: 338,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ContactModal.tsx",
                                            lineNumber: 334,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "mailto:poorva.kelkar@gmail.com",
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].directLinkCard,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].directIcon,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: EMAIL_ICON_URL,
                                                        alt: "Email link logo",
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].directIconImg
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ContactModal.tsx",
                                                        lineNumber: 347,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ContactModal.tsx",
                                                    lineNumber: 346,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].directTextCol,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].directValue,
                                                            children: "poorva.kelkar@gmail.com"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ContactModal.tsx",
                                                            lineNumber: 350,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].directCaption,
                                                            children: "Most Common."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ContactModal.tsx",
                                                            lineNumber: 351,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/ContactModal.tsx",
                                                    lineNumber: 349,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ContactModal.tsx",
                                            lineNumber: 345,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ContactModal.tsx",
                                    lineNumber: 332,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ContactModal.tsx",
                            lineNumber: 329,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ContactModal.tsx",
                    lineNumber: 147,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ContactModal.tsx",
            lineNumber: 124,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ContactModal.tsx",
        lineNumber: 123,
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
"[project]/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SplashIntro$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SplashIntro.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainLanding$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/MainLanding.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ContactModal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function Home() {
    _s();
    const [currentStep, setCurrentStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("splash");
    const [isExitingSplash, setIsExitingSplash] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isContactOpen, setIsContactOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: currentStep === "splash" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SplashIntro$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            onGetStarted: handleGetStarted,
            isExiting: isExitingSplash
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 32,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainLanding$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    onStartConversation: handleStartConversation
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 35,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    isOpen: isContactOpen,
                    onClose: handleCloseConversation
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 36,
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

//# sourceMappingURL=src_1t4q59k._.js.map