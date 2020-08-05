import * as local from './local';
import * as production from './production';

let CONFIG = { ...local }

if (process.env.NODE_ENV === "production") {
    CONFIG = { ...production }
}

export default CONFIG;
