
export let selectedColor: number | null = null;

export function setSelectedColor(colorId: number){
    document.querySelectorAll(".playerColorBox.selected").forEach((el) => {
        el.classList.remove("selected");
    });

    const el = document.getElementById(`pc_${colorId}`);
    if (el && !el.classList.contains("unavailable")) {
        el.classList.add("selected");
        selectedColor = colorId;
    }
}

// Seleção de cor
document.addEventListener("click", (ev) => {
    const target = ev.target as HTMLElement;

    if (target.classList.contains("playerColorBox") && !target.classList.contains("unavailable")) {
        const id = Number(target.id.replace(/^pc_/, ""));
        setSelectedColor(id);
        console.log("Selecionou cor:", id);
    }
});

export function resetSelectedColor() {
    document.querySelectorAll(".playerColorBox.selected").forEach((el) => {
        el.classList.remove("selected");
    });
    selectedColor = null;
}