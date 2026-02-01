import * as dotenv from 'dotenv';
dotenv.config();

import { test, expect } from '@playwright/test';

test.describe('API - Todos', () => {
  test('GET /todos/1 returns expected title', async ({ request }) => {
    const base = process.env.TODOS_API_URL;
    if (!base) throw new Error('TODOS_API_URL is not set in environment');

    const res = await request.get(`${base}todos/1`);
    expect(res.ok()).toBeTruthy();

    const body = await res.json();
    expect(body.title).toBe('delectus aut autem');
  });

  test('GET /todos/1 does not return unexpected title', async ({ request }) => {
    const base = process.env.TODOS_API_URL;
    if (!base) throw new Error('TODOS_API_URL is not set in environment');

    const res = await request.get(`${base}todos/1`);
    expect(res.ok()).toBeTruthy();

    const body = await res.json();
    expect(body.title).not.toBe('unexpected title');
  });

  test('GET /users returns array of users matching expected schema', async ({ request }) => {
    const base = process.env.TODOS_API_URL;
    if (!base) throw new Error('TODOS_API_URL is not set in environment');

    const res = await request.get(`${base}users`);
    expect(res.ok()).toBeTruthy();

    const users = await res.json();
    expect(Array.isArray(users)).toBeTruthy();
    expect(users.length).toBeGreaterThan(0);

    for (const user of users) {
      // basic required fields and types
      expect(typeof user.id).toBe('number');
      expect(typeof user.name).toBe('string');
      expect(typeof user.username).toBe('string');
      expect(typeof user.email).toBe('string');

      // address object shape
      expect(typeof user.address).toBe('object');
      expect(typeof user.address.street).toBe('string');
      expect(typeof user.address.suite).toBe('string');
      expect(typeof user.address.city).toBe('string');
      expect(typeof user.address.zipcode).toBe('string');
      expect(typeof user.address.geo).toBe('object');
      expect(typeof user.address.geo.lat).toBe('string');
      expect(typeof user.address.geo.lng).toBe('string');

      expect(typeof user.phone).toBe('string');
      expect(typeof user.website).toBe('string');

      // company object shape
      expect(typeof user.company).toBe('object');
      expect(typeof user.company.name).toBe('string');
      expect(typeof user.company.catchPhrase).toBe('string');
      expect(typeof user.company.bs).toBe('string');
    }
  });

  test('POST /posts creates a new post and verifies the response title is unique', async ({ request }) => {
    const base = process.env.TODOS_API_URL;
    if (!base) throw new Error('TODOS_API_URL is not set in environment');

    // helper to generate a 8-letter random GUID (lowercase letters)
    const randomLetters = (len: number) => {
      const chars = 'abcdefghijklmnopqrstuvwxyz';
      return Array.from({ length: len }, () => chars.charAt(Math.floor(Math.random() * chars.length))).join('');
    };
    const randomId = randomLetters(8);

    const newPost = {
      userId: 1,
      title: `iris is sending a post - ${randomId}`,
      body: 'iris is writing a post'
    };

    // Create the post
    const postRes = await request.post(`${base}posts`, { data: newPost });
    expect(postRes.ok()).toBeTruthy();
    const created = await postRes.json();

    // Basic checks on the created response
    expect(created.id).toBeDefined();
    expect(created.title).toBe(newPost.title);
    expect(created.userId).toBe(newPost.userId);
    expect(created.body).toBe(newPost.body);
  });
});