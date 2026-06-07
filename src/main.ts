import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import helmet from 'helmet';

let cachedApp: any;

const ALLOWED_ORIGIN = 'https://joel-frontend.vercel.app';

async function createApp() {
  const app = await NestFactory.create(AppModule);

  app.use((req: any, res: any, next: any) => {
    res.setHeader('Access-Control-Allow-Origin', ALLOWED_ORIGIN);
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    if (req.method === 'OPTIONS') {
      res.setHeader('Access-Control-Allow-Methods', 'GET,POST,DELETE,PATCH,OPTIONS');
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');
      return res.status(204).end();
    }
    next();
  });

  app.use(
    helmet({
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
      crossOriginResourcePolicy: { policy: "cross-origin" },
      crossOriginOpenerPolicy: { policy: "same-origin" },
    })
  );

  app.enableCors({
    origin: [ALLOWED_ORIGIN],
    methods: ['GET', 'POST', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
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

export default async (req: any, res: any) => {
  if (!cachedApp) {
    cachedApp = await createApp();
  }
  cachedApp.getHttpAdapter().getInstance()(req, res);
};
