import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { bioModule } from 'src/bio/bio.module';
import { contactModule } from 'src/contact/contact.module';
import { SupabaseModule } from 'src/supabase/supabase.module';
import { ConfigModule } from '@nestjs/config';
import { ResumeModule } from 'src/resume/resume.module';
import { SanityModule } from 'src/sanity/sanity.module';
import { ProjectsModule } from 'src/projects/projects.module';


@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true}),
    SupabaseModule,
    SanityModule,
    AuthModule,
    bioModule,
    contactModule,
    ProjectsModule,
    ResumeModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
