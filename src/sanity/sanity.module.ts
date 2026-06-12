import { Global, Module } from '@nestjs/common';
import { sanityService, sanityServiceWithoutPublished } from './sanity.service';

@Global()
@Module({
  providers: [
    { provide: 'SANITY_SERVICE', useValue: sanityService },
    { provide: 'SANITY_SERVICE_WITHOUT_PUBLISHED', useValue: sanityServiceWithoutPublished },
  ],
  exports: ['SANITY_SERVICE', 'SANITY_SERVICE_WITHOUT_PUBLISHED'],
})
export class SanityModule {}
