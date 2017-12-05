let weight = Math.floor(200 + Math.random() * 50);
export const addApple = () =>({
    type:"PICK_APPLE",
    payload:weight,
});

export const eatApple = (id) =>({
    type:"EATE_APPLE",
    id:id
});