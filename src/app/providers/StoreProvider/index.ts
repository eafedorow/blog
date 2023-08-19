import type {
    StateSchema, ReduxStoreWithManager, ThunkExtraArg, ThunkConfig,
} from './config/StateSchema';
import { StoreProvider } from './ui/StoreProvider';
import { AppDispatch, createReduxStore } from './config/store';

export {
    StoreProvider,
    createReduxStore,
    StateSchema,
    AppDispatch,
    ReduxStoreWithManager,
    ThunkExtraArg,
    ThunkConfig,
};
