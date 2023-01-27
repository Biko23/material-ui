import { createSlice } from "@reduxjs/toolkit";

const securitySlice = createSlice({
    name: 'security',
    initialState: {
        functionalGroups: [{
            functional_group_code: "FUNC_21",
            functional_group_name: "SHAREHOLDER_GRP",
            functional_group_description: "Access to the shareholders info",
            created_by: "APP_USER",
            created_on: "2023-01-25T08:26:22.243591",
            last_modified_by: "APP_USER",
            last_modified_on: "2023-01-25T08:26:22.243591",
            modules: [
                {
                    module_code: "MOD_33",
                    module_name: "SECURITY_SETTINGS_MODULE"
                }
            ]
        },{
            functional_group_code: "FUNC_22",
            functional_group_name: "ADMIN_GRP",
            functional_group_description: "Access to the admin info",
            created_by: "APP_USER",
            created_on: "2023-01-25T08:26:22.243591",
            last_modified_by: "APP_USER",
            last_modified_on: "2023-01-25T08:26:22.243591",
            modules: [
                {
                    module_code: "MOD_33",
                    module_name: "SECURITY_SETTINGS_MODULE"
                }
            ]
        },{
            functional_group_code: "FUNC_23",
            functional_group_name: "ADMIN_SUPER_GRP",
            functional_group_description: "Full system access",
            created_by: "APP_USER",
            created_on: "2023-01-25T08:26:22.243591",
            last_modified_by: "APP_USER",
            last_modified_on: "2023-01-25T08:26:22.243591",
            modules: [
                {
                    module_code: "MOD_33",
                    module_name: "SECURITY_SETTINGS_MODULE"
                }
            ]
        },],
    },
    reducers: {
        addFunctionalGroup: (state, action) => {
            console.log('In addFunctionalGroup. action: ', action);

        }
    }
});

export const { addFunctionalGroup } = securitySlice.actions;

export default securitySlice.reducer;