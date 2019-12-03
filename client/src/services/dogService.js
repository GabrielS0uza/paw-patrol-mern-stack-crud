export async function newDog(obj) {
  const config = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj)
  }
  const response = await fetch(`/api/dogs`, config);
  return response;
}

export async function editDog(id, obj) {
  const config = {
    method: 'PATCH',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj)
  }
  const response = await fetch(`/api/dogs/${id}`, config);
  return response;
}

export async function deleteById(id) {
  const response = await fetch(`/api/dogs/${id}`, { method: 'DELETE' });
  return response;
}

export async function getAll() {
  const response = await fetch('/api/dogs');
  const data = await response.json();
  return data;
}

export async function getById(id) {
  const response = await fetch(`/api/dogs/${id}`);
  const data = await response.json();
  return data;
}