import type {
  FirestoreDataConverter,
  QueryDocumentSnapshot,
  DocumentData
} from 'firebase/firestore';
export function DataConverter<T>() {
  return {
    fromFirestore: (snap: QueryDocumentSnapshot): T => {
      return <T>snap.data();
    },
    toFirestore: (data: T) => data
  }
}