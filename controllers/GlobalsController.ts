import { Controller } from "../libs/Controller";

export class GlobalsController extends Controller {
    
    public homepage() {
        this.response.render("views/pages/home")
    };

    public detail() {
        this.response.render("views/pages/detail")
    };

    public formulaire() {
        this.response.render("views/pages/formulaire")
    };

    public liste() {
        this.response.render("views/pages/liste")
    };

    public suppression() {
        this.response.render("views/pages/formulaire")
    };
}