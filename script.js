const minecraft2d = {}; 

minecraft2d.allBlocks = [];
minecraft2d.selectedWidth = 1000; 

minecraft2d.map = function() {
    this.x = 1;
    this.y = 0;

    this.generateMap = function(mapWidth) {
        minecraft2d.mapWidth = mapWidth;
        const mapHolder = document.createElement("div");
        mapHolder.id = "map";
        mapHolder.style.width = mapWidth + "px";
        const toolContainer = document.createElement("div");
        toolContainer.classList.add("tools-container", "bgholder");
        const inventoryContainer = document.createElement("div");
        inventoryContainer.classList.add("inventory-container", "bgholder");
        const resetButton = document.createElement("div");
        resetButton.classList.add("reset");
        const imgReset = document.createElement("img");
        //imgReset.src = "";
        resetButton.appendChild(imgReset);

        document.body.appendChild(mapHolder);
        mapHolder.appendChild(toolContainer);
        mapHolder.appendChild(inventoryContainer);
        mapHolder.appendChild(buttonsContainer);
        buttonsContainer.appendChild(resetButton);

        minecraft2d.oneLine = mapWidth / 50; 
    };
    minecraft2d.f = -1;
    this.generateLines = function(block, lines) {
        for (let i = 0; i < lines; i++) {
            this.x += 1;
            if (i % minecraft2d.oneLine === 0) {
                this.y += 1;
                this.x = 1;
            }
            minecraft2d.allBlocks[(minecraft2d.f + 1)] = new minecraft2d.block(block, this.x, this.y);
            minecraft2d.f++;
        }
        if (block == "blank") {
            ground = (this.y - 1);
        }
    };
    this.generateBlock = function() {
        this.generateLines("blank", minecraft2d.mapWidth / 5);
        this.generateLines("blank", minecraft2d.oneLine);
        this.generateLines("dirt", minecraft2d.mapWidth / 10);
        this.generateLines("lava", minecraft2d.oneLine);
    };
}
