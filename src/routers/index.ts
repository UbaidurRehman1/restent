import * as express from "express";

export class IndexRouter
{
    private router:express.Router = express.Router({mergeParams:true});

    public constructor()
    {
        this.enroute(this.getRouter());
    }

    private enroute(router:express.Router):void
    {
        router.get("/", (req:express.Request, res:express.Response) =>
        {
            res.render("index\\index");
        });
    }

    public setRouter(router:express.Router)
    {
        this.router = router;
    }

    public getRouter():express.Router
    {
        return this.router;
    }
}