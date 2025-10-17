import { Inject } from '@nestjs/common';

export const InjectPayload = () => Inject("PAYLOAD_INSTANCE");
