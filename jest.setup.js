const { TextEncoder, TextDecoder } = require("util");
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

const { JSDOM } = require("jsdom");

const dom = new JSDOM("<!DOCTYPE html><html><body></body></html>", { url: "http://localhost" });

global.window = dom.window;
global.document = dom.window.document;
global.localStorage = dom.window.localStorage;

// Mock matchMedia for dark mode testing
global.matchMedia = (query) => ({
    matches: query.includes("dark"),
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
});

