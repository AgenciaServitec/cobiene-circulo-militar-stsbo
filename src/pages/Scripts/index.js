import React, { useState } from "react";
import { Button, notification } from "../../components/public";
import { chunk, uniqWith } from "lodash";
import {
  Abaron4,
  RpMayo3,
  RpMontepio1,
  RpRelacionRetiro2,
} from "../../data-list";
import { firestore } from "../../firebase";
import { useDefaultFirestoreProps } from "../../hooks";

export const Scripts = () => {
  const { assignCreateProps } = useDefaultFirestoreProps();
  const [loading, setLoading] = useState();

  const runScript = async () => {
    try {
      setLoading(true);

      const data__ = [RpMontepio1, RpRelacionRetiro2, RpMayo3, Abaron4];

      const usersData = newStructureUsersData(Abaron4).filter(
        (user) => user.documents.cip
      );

      const refUserCollection = firestore.collection("users");

      const batches = chunk(usersData, 400).map((users, index) => {
        const batch = firestore.batch();

        console.log("user count ", index + 1, ":  ", 400);

        users.forEach((user, index) => {
          batch.set(refUserCollection.doc(user.id), assignCreateProps(user), {
            merge: true,
          });
        });
        return batch.commit();
      });

      await Promise.all(batches);
    } finally {
      notification({ type: "success" });
      setLoading(false);
    }
  };

  return (
    <div>
      <Button
        loading={loading}
        onClick={() => runScript()}
        text="RUN SCRIPTS"
      />
    </div>
  );
};

const newStructureUsersData = (users) =>
  uniqWith(users, "CIP/NSA").map((user) => ({
    id: firestore.collection("users").doc().id,
    roleCode: "partner",
    fullName: user["APELLIDOS Y NOMBRES"],
    documents: {
      dni: user?.["DNI"] || null,
      cip: user?.["CIP/NSA"] || user?.["CIP"] || user?.["NRO.ADMIN"] || null,
    },
    isActive: true,
    phone: {
      number: user?.["CELULAR"] || null,
    },
  }));
