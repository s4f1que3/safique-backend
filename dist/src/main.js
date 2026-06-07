"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app/app.module");
const helmet_1 = __importDefault(require("helmet"));
let cachedApp;
async function createApp() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use((0, helmet_1.default)({
        contentSecurityPolicy: {
            directives: {
                defaultSrc: ["'self'"],
                scriptSrc: ["'self'"],
                styleSrc: ["'self'", "'unsafe-inline'"],
                imgSrc: ["'self'", "data:", "https:"],
                connectSrc: ["'self'"],
                fontSrc: ["'self'"],
                objectSrc: ["'none'"],
                upgradeInsecureRequests: [],
            },
        },
        hsts: {
            maxAge: 31536000,
            includeSubDomains: true,
            preload: true,
        },
        referrerPolicy: { policy: "strict-origin-when-cross-origin" },
        xFrameOptions: { action: "deny" },
        crossOriginResourcePolicy: { policy: "same-origin" },
        crossOriginOpenerPolicy: { policy: "same-origin" },
    }));
    app.enableCors({
        origin: process.env.FRONTEND_URL || 'http://localhost:3001',
        methods: ['GET', 'POST', 'DELETE', 'PATCH'],
        credentials: true,
    });
    await app.init();
    return app;
}
async function bootstrap() {
    const app = await createApp();
    await app.listen(process.env.PORT ?? 3000);
}
if (process.env.NODE_ENV !== 'production') {
    bootstrap();
}
exports.default = async (req, res) => {
    if (!cachedApp) {
        cachedApp = await createApp();
    }
    cachedApp.getHttpAdapter().getInstance()(req, res);
};
//# sourceMappingURL=main.js.map