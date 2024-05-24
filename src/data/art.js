import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { query, where, limit, collection, doc, addDoc, getDoc, getDocs, updateDoc } from "firebase/firestore"
import { db } from "@/firebase"

export async function uploadImageToFirebaseStorage(file) {
  // Create a root reference
  const storage = getStorage();
  const storageRef = ref(storage, `images/${file.name}`);

  // 'file' comes from the Blob or File API
  const uploadRef = await uploadBytes(storageRef, file)
  console.log("Uploaded a file successfully!")
  const downloadURL = getDownloadURL(uploadRef.ref)
  return downloadURL
}

export async function addArtData(data) {
  addDoc(collection(db, "arts"), data).then((snapshot) => {
    console.log("Data was uploaded!")
    console.log(snapshot)
  })
}

export async function editArtData(data) {
  try {
    await updateDoc(doc(db, "arts", data.id), {
      title: data.title,
      description: data.description,
      price: data.price
    })
    console.log(`Edited art of id ${data.id}`)

  } catch (error) {
    console.error("Error editing document: ", error)
  }
}

export async function getArtworkData(id) {
  const querySnapshot = await getDoc(doc(db, "arts", id))
  return querySnapshot.data()
}

export async function getOtherArtworkData(id, authorId) {
  let otherArtworks = []
  const querySnapshot = await getDocs(query(collection(db, "arts"), where("authorId", "==", authorId), limit(5)));
  for (const artDoc of querySnapshot.docs) {
    if (artDoc.id != id) {
      let artwork = artDoc.data()
      artwork["id"] = artDoc.id
      otherArtworks.push(artwork)
    }
  }
  return otherArtworks
}




export const artData = [
  {
    id: 1,
    imageUrl: "1.jpg",
    created_date: "Nov 16, 2023",
    title: "Tower of Insolence",
    author: "tadasmak",
    description:
      "In this mesmerizing photograph, a Gothic masterpiece pierces the sky with its sublime elegance. The church tower, an embodiment of Gothic architecture, rises with majestic splendor, adorned with pointed arches, delicate tracery, and soaring spires that seem to reach towards the divine. Each intricately carved detail tells a tale of craftsmanship and devotion, capturing the essence of an era marked by soaring aspirations.",
  },
  {
    id: 2,
    imageUrl: "2.jpg",
    created_date: "Nov 14, 2023",
    title: "River flows in you",
    author: "tadasmak",
    description:
      "In this enchanting long-exposure photograph, the river becomes a canvas for the dance of water and light. Captured with a prolonged shutter speed, the flowing river transforms into a silky ribbon, each ripple and current blending seamlessly into the next. The ethereal quality of the water's movement is accentuated by the misty embrace of a gentle fog, which hovers above the surface like a delicate veil.",
  },
  {
    id: 3,
    imageUrl: "3.jpg",
    created_date: "Nov 01, 2023",
    title: "Purple skies evening",
    author: "tadasmak",
    description:
      "In this captivating long-exposure photograph, the evening unfolds in a symphony of reflections beside a tranquil lake. The still waters serve as a mirror, perfectly mirroring the dense forest that stands sentinel along the shore. The extended shutter speed captures the gentle movement of the lake, transforming it into a polished surface that reflects the twilight sky like a celestial canvas.",
  },
  {
    id: 4,
    imageUrl: "4.jpg",
    created_date: "Dec 02, 2023",
    title: "Landscape to Vilnius",
    author: "tadasmak",
    description:
      "In the heart of the day, Vilnius unfolds its picturesque charm beneath the radiant sun. This captivating landscape photograph captures the Lithuanian capital in all its vibrant glory. The cityscape is a harmonious blend of historic and modern architecture, with the sun casting a warm glow upon the diverse array of buildings.",
  },
  {
    id: 5,
    imageUrl: "5.jpg",
    created_date: "Oct 19, 2023",
    title: "Abandoned apocalypse",
    author: "artificial_intelligence",
    description:
      "In this hauntingly beautiful AI-generated image, an abandoned cityscape emerges like a forgotten masterpiece on canvas. The scene unfolds with an eerie grace, as if painted by the spectral hand of time itself. The buildings, once thriving with life, now stand in desolate stillness, their facades weathered by the relentless march of years.",
  },
  {
    id: 6,
    imageUrl: "6.jpg",
    created_date: "Sep 26, 2023",
    title: "Light blue intelligence",
    author: "artificial_intelligence",
    description:
      "In this enchanting AI-generated image, a woman in a light blue dress gracefully traverses the cobbled streets of a medieval town, casting a timeless silhouette against the historical backdrop. The soft, muted hues of the cobblestones and stone buildings create a setting that seems plucked from the pages of a medieval manuscript.",
  },
  {
    id: 7,
    imageUrl: "7.jpg",
    created_date: "Sep 12, 2023",
    title: "Breath of a flower",
    author: "artificial_intelligence",
    description:
      "In this mesmerizing AI-generated image, a close-up view of a flower transports us into a realm of vibrant surrealism. The blossom, an intricate tapestry of pink, red, and yellow, unfurls its petals like a kaleidoscopic dance. The psychedelic effect intensifies as the colors converge towards the center, creating a visual symphony that seems to defy the ordinary boundaries of nature.",
  },
  {
    id: 8,
    imageUrl: "8.jpg",
    created_date: "Nov 25, 2023",
    title: "Daisy forest",
    author: "artificial_intelligence",
    description:
      "In this enchanting AI-generated image, a lush forest floor transforms into a magical carpet of daisies, creating a scene that is both whimsical and serene. The verdant expanse of the forest is blanketed by a profusion of white and yellow daisies, creating a breathtaking contrast against the rich green foliage.",
  },
  {
    id: 9,
    imageUrl: "9.jpg",
    created_date: "Dec 06, 2023",
    title: "Neighbor's motorcycle",
    author: "tadasmak",
    description:
      "In this captivating photograph, an orange-black motorcycle stands as a beacon of power and style, leaning against a weathered wall adorned with nature's embrace. The motorcycle, with its sleek design and vibrant colors, exudes a sense of adventure, hinting at journeys yet to unfold. Resting against the textured surface of the wall, it becomes a testament to the synergy between man-made machines and the organic world.",
  },
  {
    id: 10,
    imageUrl: "10.jpg",
    created_date: "Oct 08, 2023",
    title: "A studio of masterwork",
    author: "artificial_intelligence",
    description:
      "In this evocative AI-generated image, the soul of creativity comes to life within the warm embrace of a rustic brick building turned art studio. The studio, bathed in soft, natural light pouring through large, weathered windows, exudes an atmosphere of inspiration and artistic fervor.",
  },
  {
    id: 11,
    imageUrl: "11.jpg",
    created_date: "Dec 09, 2023",
    title: "Glampse into the futuristic art",
    author: "artificial_intelligence",
    description:
      "In this captivating AI-generated image, a lone figure stands in a mesmerizing futuristic environment, bathed in the stark contrast of black and white tones. The setting exudes an otherworldly ambiance, reminiscent of a vast repository of knowledge, yet defying traditional expectations of a library.",
  },
  {
    id: 12,
    imageUrl: "12.jpg",
    created_date: "Nov 02, 2023",
    title: "Forgotten Solitude",
    author: "artificial_intelligence",
    description:
      "An eerie scene in nature: an abandoned house stands alone amidst the dense and untamed forest, surrounded by towering trees and overgrown vegetation, telling a story of solitude and forgotten history.",
  },
  {
    id: 13,
    imageUrl: "13.jpg",
    created_date: "Oct 20, 2023",
    title: "A battle between nations",
    author: "artificial_intelligence",
    description:
      "In this riveting AI-generated image, two colossal ground-based war machines command attention on a futuristic battlefield. One machine emanates a fierce red aura, while the other exudes a resolute blue glow, symbolizing the clash of opposing forces in a high-tech theater of war. These massive, tank-like constructs, reminiscent of futuristic landships, dominate the expansive battleground.",
  },
];
