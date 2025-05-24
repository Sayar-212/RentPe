import { 
  categories, 
  products, 
  testimonials,
  users,
  type Category, 
  type Product, 
  type Testimonial,
  type User,
  type UpsertUser,
  type InsertCategory,
  type InsertProduct,
  type InsertTestimonial
} from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  // User operations (required for Replit Auth)
  getUser(id: string): Promise<User | undefined>;
  upsertUser(user: UpsertUser): Promise<User>;

  // Categories
  getCategories(): Promise<Category[]>;
  getCategory(id: number): Promise<Category | undefined>;
  createCategory(category: InsertCategory): Promise<Category>;

  // Products
  getProducts(): Promise<Product[]>;
  getProduct(id: number): Promise<Product | undefined>;
  getProductsByCategory(categoryId: number): Promise<Product[]>;
  getFeaturedProducts(): Promise<Product[]>;
  createProduct(product: InsertProduct): Promise<Product>;

  // Testimonials
  getTestimonials(): Promise<Testimonial[]>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
}

export class DatabaseStorage implements IStorage {
  // User operations (required for Replit Auth)
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async upsertUser(userData: UpsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(userData)
      .onConflictDoUpdate({
        target: users.id,
        set: {
          ...userData,
          updatedAt: new Date(),
        },
      })
      .returning();
    return user;
  }

  // Categories
  async getCategories(): Promise<Category[]> {
    return await db.select().from(categories);
  }

  async getCategory(id: number): Promise<Category | undefined> {
    const [category] = await db.select().from(categories).where(eq(categories.id, id));
    return category;
  }

  async createCategory(insertCategory: InsertCategory): Promise<Category> {
    const [category] = await db
      .insert(categories)
      .values(insertCategory)
      .returning();
    return category;
  }

  // Products
  async getProducts(): Promise<Product[]> {
    return await db.select().from(products);
  }

  async getProduct(id: number): Promise<Product | undefined> {
    const [product] = await db.select().from(products).where(eq(products.id, id));
    return product;
  }

  async getProductsByCategory(categoryId: number): Promise<Product[]> {
    return await db.select().from(products).where(eq(products.categoryId, categoryId));
  }

  async getFeaturedProducts(): Promise<Product[]> {
    return await db.select().from(products).limit(4);
  }

  async createProduct(insertProduct: InsertProduct): Promise<Product> {
    const [product] = await db
      .insert(products)
      .values(insertProduct)
      .returning();
    return product;
  }

  // Testimonials
  async getTestimonials(): Promise<Testimonial[]> {
    return await db.select().from(testimonials);
  }

  async createTestimonial(insertTestimonial: InsertTestimonial): Promise<Testimonial> {
    const [testimonial] = await db
      .insert(testimonials)
      .values(insertTestimonial)
      .returning();
    return testimonial;
  }
}

export class MemStorage implements IStorage {
  private categories: Map<number, Category>;
  private products: Map<number, Product>;
  private testimonials: Map<number, Testimonial>;
  private currentCategoryId: number;
  private currentProductId: number;
  private currentTestimonialId: number;

  constructor() {
    this.categories = new Map();
    this.products = new Map();
    this.testimonials = new Map();
    this.currentCategoryId = 1;
    this.currentProductId = 1;
    this.currentTestimonialId = 1;

    this.initializeData();
  }

  // User operations (required for Replit Auth)
  async getUser(id: string): Promise<User | undefined> {
    // For memory storage, we'll just return undefined for now
    return undefined;
  }

  async upsertUser(userData: UpsertUser): Promise<User> {
    // For memory storage, we'll just return a mock user
    return {
      id: userData.id!,
      email: userData.email || null,
      firstName: userData.firstName || null,
      lastName: userData.lastName || null,
      profileImageUrl: userData.profileImageUrl || null,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  }

  private initializeData() {
    // Initialize categories
    const categoryData = [
      {
        name: "Electronics",
        description: "Laptops, cameras, gaming consoles",
        imageUrl: "https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
        startingPrice: "15.00"
      },
      {
        name: "Home Appliances",
        description: "Washers, dryers, kitchen equipment",
        imageUrl: "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
        startingPrice: "25.00"
      },
      {
        name: "Outdoor Gear",
        description: "Camping, hiking, sports equipment",
        imageUrl: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
        startingPrice: "10.00"
      },
      {
        name: "Tools & Equipment",
        description: "Power tools, construction equipment",
        imageUrl: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
        startingPrice: "20.00"
      }
    ];

    categoryData.forEach(cat => {
      const category: Category = { ...cat, id: this.currentCategoryId++ };
      this.categories.set(category.id, category);
    });

    // Initialize products
    const productData = [
      {
        name: "MacBook Pro 16\"",
        description: "2023 Model, M2 Chip, 32GB RAM",
        imageUrl: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        categoryId: 1,
        dailyPrice: "45.00",
        weeklyPrice: "250.00",
        monthlyPrice: "900.00",
        available: true,
        availableQuantity: 3
      },
      {
        name: "Canon EOS R5",
        description: "Mirrorless Camera + 24-70mm Lens",
        imageUrl: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        categoryId: 1,
        dailyPrice: "65.00",
        weeklyPrice: "350.00",
        monthlyPrice: "1200.00",
        available: true,
        availableQuantity: 2
      },
      {
        name: "Samsung Washer & Dryer",
        description: "Front Load Set, Energy Efficient",
        imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        categoryId: 2,
        dailyPrice: "25.00",
        weeklyPrice: "140.00",
        monthlyPrice: "450.00",
        available: true,
        availableQuantity: 5
      },
      {
        name: "Trek Mountain Bike",
        description: "Full Suspension, Size L",
        imageUrl: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        categoryId: 3,
        dailyPrice: "30.00",
        weeklyPrice: "150.00",
        monthlyPrice: "500.00",
        available: true,
        availableQuantity: 4
      },
      {
        name: "DeWalt Power Drill Set",
        description: "Cordless with multiple bits",
        imageUrl: "https://images.unsplash.com/photo-1504148455328-c376907d081c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        categoryId: 4,
        dailyPrice: "20.00",
        weeklyPrice: "100.00",
        monthlyPrice: "300.00",
        available: true,
        availableQuantity: 6
      },
      {
        name: "Nintendo Switch OLED",
        description: "Latest model with Joy-Cons",
        imageUrl: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        categoryId: 1,
        dailyPrice: "15.00",
        weeklyPrice: "80.00",
        monthlyPrice: "250.00",
        available: true,
        availableQuantity: 8
      }
    ];

    productData.forEach(prod => {
      const product: Product = { 
        ...prod, 
        id: this.currentProductId++,
        categoryId: prod.categoryId || null,
        available: prod.available ?? true,
        availableQuantity: prod.availableQuantity ?? 1
      };
      this.products.set(product.id, product);
    });

    // Initialize testimonials
    const testimonialData = [
      {
        name: "Alex Johnson",
        title: "Tech Enthusiast",
        content: "Perfect for trying out expensive gadgets before buying. Rented a drone for my vacation and it was amazing!",
        avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
        rating: 5
      },
      {
        name: "Sarah Chen",
        title: "Interior Designer",
        content: "Saved so much money on appliances during my move. The delivery and pickup service was seamless.",
        avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
        rating: 5
      },
      {
        name: "Mike Rodriguez",
        title: "Adventure Seeker",
        content: "Great for seasonal equipment! Rented camping gear for a weekend trip without cluttering my apartment.",
        avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
        rating: 5
      }
    ];

    testimonialData.forEach(test => {
      const testimonial: Testimonial = { ...test, id: this.currentTestimonialId++ };
      this.testimonials.set(testimonial.id, testimonial);
    });
  }

  async getCategories(): Promise<Category[]> {
    return Array.from(this.categories.values());
  }

  async getCategory(id: number): Promise<Category | undefined> {
    return this.categories.get(id);
  }

  async createCategory(insertCategory: InsertCategory): Promise<Category> {
    const id = this.currentCategoryId++;
    const category: Category = { ...insertCategory, id };
    this.categories.set(id, category);
    return category;
  }

  async getProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }

  async getProduct(id: number): Promise<Product | undefined> {
    return this.products.get(id);
  }

  async getProductsByCategory(categoryId: number): Promise<Product[]> {
    return Array.from(this.products.values()).filter(p => p.categoryId === categoryId);
  }

  async getFeaturedProducts(): Promise<Product[]> {
    return Array.from(this.products.values()).slice(0, 4);
  }

  async createProduct(insertProduct: InsertProduct): Promise<Product> {
    const id = this.currentProductId++;
    const product: Product = { ...insertProduct, id };
    this.products.set(id, product);
    return product;
  }

  async getTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values());
  }

  async createTestimonial(insertTestimonial: InsertTestimonial): Promise<Testimonial> {
    const id = this.currentTestimonialId++;
    const testimonial: Testimonial = { ...insertTestimonial, id };
    this.testimonials.set(id, testimonial);
    return testimonial;
  }
}

export const storage = new DatabaseStorage();
