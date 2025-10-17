// payload.module.ts
import { DynamicModule, Global, Module } from '@nestjs/common'
import payload from 'payload'
import buildConfig from '../../payload.config'
@Global()
@Module({})
export class PayloadModule {
  static forRoot(): DynamicModule {
    const payloadProvider = {
      provide: 'PAYLOAD_INSTANCE',
      useFactory: async () => {
        const instance = await payload.init({
          config: buildConfig,
        })
        return instance
      },
    }

    return {
      module: PayloadModule,
      providers: [payloadProvider],
      exports: [payloadProvider],
    }
  }
}
