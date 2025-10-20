// app/api/copilotkit/route.ts
import {
  CopilotRuntime,
  ExperimentalEmptyAdapter,
  copilotRuntimeNextJSAppRouterEndpoint,
} from "@copilotkit/runtime";
import { HttpAgent } from "@ag-ui/client";
import { NextRequest } from "next/server";

const serviceAdapter = new ExperimentalEmptyAdapter();

const runtime = new CopilotRuntime({
  agents: {
    "data_agent": new HttpAgent({ 
      url: "http://localhost:8000/api/agent",
      // Add timeout to see if that's the issue
      // timeout: 30000, // 30 seconds
    }),
  }
});

export const POST = async (req: NextRequest) => {
  try {
    console.log("CopilotKit API called");
    
    const { handleRequest } = copilotRuntimeNextJSAppRouterEndpoint({
      runtime,
      serviceAdapter,
      endpoint: "/api/copilotkit",
    });

    const response = await handleRequest(req);
    console.log("Response generated successfully");
    return response;
  } catch (error) {
    console.error("CopilotKit API error:", error);
    return new Response(
      JSON.stringify({ error: error.message, stack: error.stack }), 
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};