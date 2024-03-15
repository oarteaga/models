import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"
import { withSetPropAction } from "./helpers/withSetPropAction"

const FieldModel = types.model({
    id: types.identifier,
    label: types.string,
    tagname: types.string,
    section_id: types.maybe(types.string),
    sectionName: types.string,
    description: types.maybe(types.string),
    valid: types.model({
        required: types.maybe(types.number)
    }),
    element: types.map(types.union(types.string, types.number, types.boolean, types.array(types.string))),
    columnsystem: types.maybe(types.boolean),
    sortableKey: types.maybe(types.number),
    helptext: types.maybeNull(types.string),
    position: types.maybeNull(types.string),
})
    .actions((self) => ({
        attr(name: string, value?: any) {
            if (arguments.length == 2) {
                self.element.set(name, value)
            } else if (name) {
                return self.element.get(name)
            }
        },

        isRequired<bool>() {
            return self.valid.required;
        },

        isHidden<bool>() {
            return self.element.get('type') == 'hidden'
        },

        getPosition(): { column: number, row: number, w: number, h: number } {
            const position = self.position?.split('|') || '1|1|4|1'
            return {
                row: parseInt(position[0]),
                column: parseInt(position[1]),
                w: parseInt(position[2]),
                h: parseInt(position[3]),
            }
        }
    }))

export const SectionModel = types
    .model("Section")
    .props({
        uuid: types.identifier,
        id: types.string,
        id_section: types.string,
        name: types.string,
        sectionName: types.string,
        description: types.string,
        fields: types.array(FieldModel)
    })
    .actions(withSetPropAction)
    .views((section) => ({
    }))

export interface Field extends Instance<typeof FieldModel> { }
export interface Section extends Instance<typeof SectionModel> { }
export interface SectionSnapshotOut extends SnapshotOut<typeof SectionModel> { }
export interface SectionSnapshotIn extends SnapshotIn<typeof SectionModel> { }
