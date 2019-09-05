import { Test, TestingModule } from '@nestjs/testing';
import { FoodsGateway } from './foods-gateway.gateway';

describe('FoodsGatewayGateway', () => {
  let gateway: FoodsGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FoodsGateway],
    }).compile();

    gateway = module.get<FoodsGateway>(FoodsGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
