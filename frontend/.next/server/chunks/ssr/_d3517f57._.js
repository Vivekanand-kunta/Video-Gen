module.exports = [
"[project]/lib/appwrite.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "storage",
    ()=>storage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$appwrite$2f$dist$2f$esm$2f$sdk$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/appwrite/dist/esm/sdk.js [app-ssr] (ecmascript)");
;
const client = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$appwrite$2f$dist$2f$esm$2f$sdk$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Client"]().setEndpoint(("TURBOPACK compile-time value", "https://fra.cloud.appwrite.io/v1")) // API endpoint
.setProject(("TURBOPACK compile-time value", "68aeb53d001c62f04f81")); // Project ID
const storage = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$appwrite$2f$dist$2f$esm$2f$sdk$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Storage"](client);
}),
"[project]/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>UploadFile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$appwrite$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/appwrite.ts [app-ssr] (ecmascript)");
"use client";
;
;
function UploadFile() {
    async function handleUpload(e) {
        if (!e.target.files) return;
        const file = e.target.files[0];
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$appwrite$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["storage"].createFile(("TURBOPACK compile-time value", "68aebee5001a13eab4d1"), "unique()", file);
            console.log("File uploaded:", response);
        } catch (err) {
            console.error("Upload failed:", err);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: "file",
        onChange: handleUpload
    }, void 0, false, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 23,
        columnNumber: 10
    }, this);
}
}),
];

//# sourceMappingURL=_d3517f57._.js.map