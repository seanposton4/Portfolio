import { db } from '$lib/firebase/firebase.ts';
import { collection, query, getDocs } from 'firebase/firestore';
import type { GarageOpener } from '$lib/models/firestore/GarageOpener.ts';
import { DataConverter } from '$lib/models/firestore/DataConverter.ts';
import  { Collections } from '$lib/models/firestore/Collections.ts';

export async function getGarageDoors(): Promise<GarageOpener[]> {
  try {
    const coll = collection(db, Collections.GarageOpeners);
    const garageOpenersColl = coll.withConverter(DataConverter<GarageOpener>())
    const garageQuery = query(garageOpenersColl);
    const res = await getDocs(garageQuery);

    return res.docs.map((opener): GarageOpener =>
      <GarageOpener>opener.data()
    );
  } catch(err) {
    console.error('Query Error: ', err);
  }
  return [];
}