import {createSlice} from '@reduxjs/toolkit'

const MenuToggleSlice = createSlice({
name:"menu",
initialState:{
isMenuOpen : true,
},
reducers:{
    toggleMenu : (state) => {
        state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu : (state) => {
        state.isMenuOpen = false;
    },
    openMenu: (state) => {
        state.isMenuOpen = true;
    },
}
})

export const {toggleMenu , closeMenu , openMenu} = MenuToggleSlice.actions;

export default MenuToggleSlice.reducer;