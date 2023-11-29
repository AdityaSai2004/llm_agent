import { initializeAgentExecutorWithOptions } from "langchain/agents";
import { ChatOpenAI } from "langchain/chat_models/openai";
import { SerpAPI } from "langchain/tools";
import { Calculator } from "langchain/tools/calculator";

const tools = [new Calculator(), new SerpAPI()];

const llm = new ChatOpenAI({ modelName: "gpt-4", temperature: 0 });

const executor = await initializeAgentExecutorWithOptions(tools, llm, {
  agentType: "openai-functions",
  verbose: true,
});

const result = await executor.invoke({
  input: "What is the weather in New York?",
});
console.log(result);
// test
