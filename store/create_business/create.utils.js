import fbConfig from "../../firebase/fb-config";

import {createBusinessRequest, createBusinessSuccess,} from "./create.actions";

export const createBusiness = ({
                                   picture,
                                   businessName,
                               }) => dispatch => {
    dispatch(createBusinessRequest());
    fbConfig.uploadBytes(fbConfig.storageRef, picture).then((snapshot) => {
        console.log('Uploaded a blob or file!', snapshot);
        fbConfig.getDownloadURL(fbConfig.storageRef)
            .then(url => dispatch(createBusinessSuccess(url)));
    });
}
