import 'dotenv/config';
import { createClient, SanityClient } from "@sanity/client";


export const sanityService  = createClient({
    projectId: 'ss6xqrwr',
    dataset: 'production',
    useCdn: false,
    perspective: 'published',
    token: process.env.EDITOR_TOKEN,
    apiVersion: '2026-03-01'
})




export const sanityServiceWithoutPublished = createClient({
    projectId: 'ss6xqrwr',
    dataset: 'production',
    useCdn: false,
    token: process.env.EDITOR_TOKEN,
        apiVersion: '2026-03-01'
})



