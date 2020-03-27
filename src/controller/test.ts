import { Context } from "koa";

class TestController {
    async test(ctx: Context) {
        console.log(ctx.request.body);
        ctx.body = { data: "你好" };
    }
}

export default new TestController();