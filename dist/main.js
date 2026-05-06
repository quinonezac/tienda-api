"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    try {
        const app = await core_1.NestFactory.create(app_module_1.AppModule);
        app.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,PATCH,OPTIONS');
            res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Accept');
            if (req.method === 'OPTIONS') {
                return res.sendStatus(200);
            }
            next();
        });
        app.useGlobalPipes(new common_1.ValidationPipe({ whitelist: true, transform: true }));
        app.setGlobalPrefix('api');
        const port = process.env.PORT || 3000;
        await app.listen(port, '0.0.0.0');
        console.log(`API corriendo en puerto ${port}`);
        console.log(`DATABASE_URL exists: ${!!process.env.DATABASE_URL}`);
    }
    catch (error) {
        console.error('Error al iniciar la aplicación:', error);
        process.exit(1);
    }
}
bootstrap();
//# sourceMappingURL=main.js.map