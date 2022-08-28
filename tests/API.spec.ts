import { test, expect } from '@playwright/test';

test('API', async ({playwright}) =>{
    const request = await playwright.request.newContext({
        baseURL: 'https://satangcorp.com',
    });

    const response = await request.get('/api/configs/');

    await expect(response).toBeOK();
    const Json = await response.json();
    await expect(Json["kyc_forms"]["occupations"]).toContainEqual(expect.objectContaining({"en":"Company Employee"}))
});