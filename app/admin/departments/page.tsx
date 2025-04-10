"use client";

import { useEffect, useState } from "react";
import { getAllDepartmentsWithTeacherCount } from "@/lib/services/departments";
import { Department } from "@/lib/types/api";
import DepartmentGrid from "@/components/admin/display/DepartmentGrid";
import { AddDepartmentDialog } from "@/components/admin/dialogs/DepartmentDialogs";

export default function Departments() {
  const [departments, setDepartments] = useState<Department[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  console.log(departments);
  const addDepartmentToState = (department: Department) => {
    department.teacherCount = 0;
    setDepartments([...departments, department]);
  };

  const deleteDepartmentFromState = (id: string) => {
    setDepartments(departments.filter((department) => department.id !== id));
  };

  const editDepartmentInState = (updatedDepartment: Department) => {
    setDepartments(
      departments.map((department) =>
        department.id === updatedDepartment.id ? updatedDepartment : department
      )
    );
  };

  useEffect(() => {
    async function fetchDepartments() {
      try {
        const departmentsData = await getAllDepartmentsWithTeacherCount();
        setDepartments(departmentsData);
      } catch {
        setError("Failed to fetch departments");
      } finally {
        setLoading(false);
      }
    }
    fetchDepartments();
  }, []);

  return (
    <>
      <h1 className="font-bold text-2xl flex items-center gap-2">
        Departments <AddDepartmentDialog onDepartmentAdded={addDepartmentToState}/>
      </h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <DepartmentGrid
          onDepartmentDeleted={deleteDepartmentFromState}
          onDepartmentEdited={editDepartmentInState}
          departments={departments}
        />
      )}
    </>
  );
}