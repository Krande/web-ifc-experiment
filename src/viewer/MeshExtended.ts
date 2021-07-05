import { Mesh, BufferGeometry, MeshLambertMaterial, Color } from "three";

export type MeshExtended = Mesh<BufferGeometry, MeshLambertMaterial> & {
    meshType: "generated" | "selected" | "new-visible-model";
    meshID: number;
    meshColor: Color;
};
