var tilesHander = new TilesHandler(mappings);

function TilesHandler(mapps) {
    var mappings,
        allItems;
    
    //init
    (function() {
        mappings = mapps;
        allItems = $("#projectTypes a, #bussinessZones a");

        $(allItems).off("mouseover"); 
        $(allItems).off("mouseleave");

        /*------------Hover images--------------*/
        setDefaultItemsImage();
        $(allItems).hover(
            function () {
                setBg(this, $(this).data('hoverbg'));
            },
            function () {
                setBg(this, $(this).data('bg'));
            }
        );

        /*---------------Dependent Tiles Highlighting-------------------*/
        $(allItems).on("mouseover.dep", function () {
            var id = $(this).attr("id");
            var dependents = getDependentItemsFor(id);
            highlightDependents(dependents, allItems);

        });

        $(allItems).on("mouseleave.dep", function () {
            clearHightlightingFrom(allItems);
            setDefaultItemsImage();
        });

    }());

    function setDefaultItemsImage(){
        $(allItems).each(function () { setBg(this, $(this).data('bg')); });
    }
    function setBg(element, bgUrl) {
        if (!bgUrl) return;
        $(element).css('background-image', "url('" + bgUrl + "')");
    }

    function getDependentItemsFor(masterId) {
        return (masterId in mappings) ? mappings[masterId] : [];
    }

    function highlightDependents(dependentsToHighlight, allDependents) {
        clearHightlightingFrom(allDependents);
        
        if (!dependentsToHighlight)
            return;

        for (var i = 0, dependentsCount = dependentsToHighlight.length; i < dependentsCount; i++) {
            var item = $("#" + dependentsToHighlight[i]);
            
            $(item).addClass("highlight");
            setBg(item, $(item).data("hoverbg"));
        }
    }

    function clearHightlightingFrom(items) {
        $(items).removeClass("highlight");
    }
}
