import { Instance, SnapshotOut, flow, resolveIdentifier, types } from "mobx-state-tree"
import { Section, SectionModel } from "./Section"
import { withSetPropAction } from "./helpers/withSetPropAction"
import { api } from "../apiClient"

export const SectionStoreModel = types
    .model("SectionStore")
    .props({
        sections: types.map(SectionModel),
    })
    .actions(withSetPropAction)
    .actions((store) => ({
        setSection(uuid: string, section: any): Section {
            store.sections.put({ uuid: uuid, ...section })
            return resolveIdentifier(SectionModel, store, uuid) as Section
        }
    }))
    .views((store) => ({
        getSection(uuid: string): Section | undefined {
            const section = resolveIdentifier(SectionModel, store, uuid)
            return section
        },
    }))

export interface SectionStore extends Instance<typeof SectionModel> { }
export interface SectionStoreSnapshot extends SnapshotOut<typeof SectionModel> { }
