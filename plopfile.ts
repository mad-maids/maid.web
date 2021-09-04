import { NodePlopAPI } from "plop";

export default (plop: NodePlopAPI): void => {
	plop.setGenerator("post", {
		description: "Gernerate a new post",
		prompts: [
			{
				type: "list",
				name: "contentType",
				message: "What type of post are you creating?",
				choices: ["posts", "works"],
			},
			{
				type: "input",
				name: "title",
				message: "What is the title of the post?",
			},
			{
				type: "input",
				name: "description",
				message: "What is the description of the post?",
			},
		],
		actions: [
			{
				type: "add",
				path: "src/pages/{{contentType}}/{{dashCase title}}.mdx",
				templateFile: "templates/{{contentType}}.hbs",
				data: { date: new Date().toISOString() },
			},
		],
	});

	plop.setGenerator("component", {
		description: "Create a component",
		prompts: [
			{
				type: "input",
				name: "name",
				message: "What is your component name?",
			},
		],
		actions: [
			{
				type: "add",
				path: "src/components/{{pascalCase name}}/{{pascalCase name}}.ts",
				templateFile: "templates/Component.js.hbs",
			},
		],
	});

	plop.setGenerator("hook", {
		description: "Create a Hook",
		prompts: [
			{
				type: "input",
				name: "name",
				message: "What is your Hook name?",
			},
		],
		actions: [
			{
				type: "add",
				path: "src/hooks/use{{pascalCase name}}.ts",
				templateFile: "templates/Hook.js.hbs",
			},
		],
	});
};
