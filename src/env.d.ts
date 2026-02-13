type ENV = {
  // replace `MY_KV` with your KV namespace
  DB: D1Database;
};

type Runtime = import("@astrojs/cloudflare").Runtime<Env>;

declare namespace App {
	interface Locals extends Runtime {}
}
