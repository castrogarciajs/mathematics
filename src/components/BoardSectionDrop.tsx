import { useDroppable } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { ElementDragg } from "../utils/types";
import { ItemDraggable } from "./ItemDraggable";
import { SortableItem } from "./SortableItem";

type BoardDroppableProp = {
  id: string;
  itemDragg: ElementDragg[];
};

export const BoardDroppableSection = ({
  id,
  itemDragg,
}: BoardDroppableProp) => {
  const { setNodeRef } = useDroppable({
    id,
  });
  return (
    <div className="bg-black">
      <SortableContext
        id={id}
        items={itemDragg}
        strategy={verticalListSortingStrategy}
      >
        <div ref={setNodeRef} className="shadow">
          {itemDragg.map((dragItem) => (
            <div key={dragItem.id} className="bg-white">
              <SortableItem id={dragItem.id}>
                <ItemDraggable dragg={dragItem} />
              </SortableItem>
            </div>
          ))}
        </div>
      </SortableContext>
    </div>
  );
};